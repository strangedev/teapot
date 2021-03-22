import { CustomError } from '@yeldirium/kaputt';
import { NotificationContext } from '../../../ux/notifications';
import { Result } from '@yeldirium/result';
import { setVolume } from '../../../client/alsa/setVolume';
import { VolumePercent } from '../../../types/VolumePercent';
import { VolumeSlider } from './VolumeSlider';
import React, { FunctionComponent, ReactElement, useContext, useState } from 'react';

interface AlsaClientProps {
  initialVolume: VolumePercent;
}

const AlsaClient: FunctionComponent<AlsaClientProps> = function ({ initialVolume }): ReactElement {
  const { pushNotification } = useContext(NotificationContext);

  return (
    <VolumeSlider
      rangeStart={ 30 }
      rangeEnd={ 100 }
      stepsCount={ 10 }
      initialValue={ initialVolume }
      onChange={
        async (value): Promise<Result<void, CustomError>> => await setVolume(pushNotification, value)
      }
    />
  );
};

export {
  AlsaClient
};
