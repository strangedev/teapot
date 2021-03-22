import { CustomError } from '@yeldirium/kaputt';
import { ignoreExceptions } from '../../../utils/ignoreExceptions';
import { Result } from '@yeldirium/result';
import React, { FunctionComponent, ReactElement, useState } from 'react';
import { ResponsiveTextSize } from '../../responsive/ResponsiveTextSize';

interface VolumeSliderProps {
  stepsCount: number;
  rangeStart: number;
  rangeEnd: number;
  initialValue?: number;
  onChange: (value: number) => Promise<Result<any, CustomError>>;
}

const VolumeSlider: FunctionComponent<VolumeSliderProps> = function ({
  stepsCount,
  rangeStart,
  rangeEnd,
  onChange,
  initialValue
}): ReactElement {
  const mapStepNumberToRange = function (stepNumber: number): number {
    const increment = (rangeEnd - rangeStart) / stepsCount;

    return Math.floor(rangeStart + (stepNumber * increment));
  };

  const mapRangeValueToStep = function (rangeValue: number): number {
    const increment = (rangeEnd - rangeStart) / stepsCount;

    return Math.floor((rangeValue - rangeStart) / increment);
  };

  const [ selectedValue, setSelectedValue ] = useState(initialValue ?? 0);
  const [ selectedStep, setSelectedStep ] = useState(mapRangeValueToStep(selectedValue));

  return (
    <ResponsiveTextSize>
      <div style={{ whiteSpace: 'pre-wrap' }}>
        {
          // eslint-disable-next-line unicorn/new-for-builtins
          [ ...Array(stepsCount + 1).keys() ].
            map((stepNumber): number => stepNumber).
            map(
              (stepNumber): ReactElement => (
                <span
                  key={ stepNumber }
                  onClick={
                    (): void => {
                      const previouslySelectedStep = selectedStep;
                      const previouslySelectedValue = selectedValue;
                      const newSelectedStep = stepNumber;
                      const newSelectedValue = mapStepNumberToRange(stepNumber);

                      setSelectedStep(newSelectedStep);
                      setSelectedValue(newSelectedValue);
                      ignoreExceptions(
                        onChange(newSelectedValue).then((result): void => {
                          if (result.isFailed) {
                            setSelectedStep(previouslySelectedStep);
                            setSelectedValue(previouslySelectedValue);
                          }
                        })
                      );
                    }
                  }
                >
                  {
                    stepNumber === selectedStep ?
                      `|${selectedValue.toString().padStart(3, ' ')}|` :
                      '-----'
                  }
                </span>
              )
            )
        }
      </div>
    </ResponsiveTextSize>
  );
};

export {
  VolumeSlider
};
