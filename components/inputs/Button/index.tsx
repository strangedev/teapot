import { Container } from './Container';
import { Theme } from '../../../types/Theme';
import { useTheme } from 'styled-components';
import { isFailed, Result } from '@yeldirium/result';
import React, { FunctionComponent, ReactElement, useState } from 'react';

interface ButtonProps {
  onClick: () => Promise<Result<any, any>>;
}

const getSymbols = function (handlerState: 'okay' | 'busy' | 'failed'): string[] {
  switch (handlerState) {
    case 'failed': {
      return [ '!', '!' ];
    }
    default: {
      return [ '>', '<' ];
    }
  }
};

const Button: FunctionComponent<ButtonProps> = function ({ children, onClick }): ReactElement {
  const [ handlerState, setHandlerState ] = useState<'okay' | 'busy' | 'failed'>('okay');
  const theme = useTheme() as Theme;
  const [ leftSymbol, rightSmybol ] = getSymbols(handlerState);

  return (
    <Container
      state={ handlerState }
      onClick={
        (): void => {
          setHandlerState('busy');
          onClick().
            then((result: Result<any, any>): void => {
              setHandlerState(isFailed(result) ? 'failed' : 'okay');
              setTimeout((): void => {
                setHandlerState('okay');
              }, theme.animations.button.durationMilliSeconds);
            }).
            catch((): void => {
              setHandlerState('failed');
              setTimeout((): void => {
                setHandlerState('okay');
              }, theme.animations.button.durationMilliSeconds);
            });
        }
      }
    >
      { leftSymbol }&nbsp;{ children }&nbsp;{ rightSmybol }
    </Container>
  );
};

export {
  Button
};
