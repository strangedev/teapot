import { AxiosResponse } from 'axios';
import { CustomError } from '@yeldirium/kaputt';
import { getAxiosClient } from '../getAxiosClient';
import { PushNotificationFunction } from '../../types/PushNotificationFunction';
import { receiveResult } from '../../api/receiveResult';
import { Result } from '@yeldirium/result';
import { VolumePercent } from '../../types/VolumePercent';

const setVolume = async function (pushNotification: PushNotificationFunction, volumePercent: VolumePercent): Promise<Result<void, CustomError>> {
  const result = await receiveResult<void>(
    async (): Promise<AxiosResponse> => await getAxiosClient().patch('/alsa/volume', { volumePercent })
  );

  if (result.isFailed) {
    pushNotification({
      headline: result.error.name,
      message: result.error.data,
      urgency: 'urgent'
    });
  }

  return result;
};

export {
  setVolume
};
