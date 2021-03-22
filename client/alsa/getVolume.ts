import { AxiosResponse } from 'axios';
import { CustomError } from '@yeldirium/kaputt';
import { getAxiosClient } from '../getAxiosClient';
import { PushNotificationFunction } from '../../types/PushNotificationFunction';
import { receiveResult } from '../../api/receiveResult';
import { Result } from '@yeldirium/result';
import { VolumePercent } from '../../types/VolumePercent';

const getVolume = async function (pushNotification: PushNotificationFunction): Promise<Result<VolumePercent, CustomError>> {
  const result = await receiveResult<VolumePercent>(
    async (): Promise<AxiosResponse> => await getAxiosClient().get('/alsa/volume')
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
  getVolume
};
