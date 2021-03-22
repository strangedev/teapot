import { AxiosResponse } from 'axios';
import { CustomError } from '@yeldirium/kaputt';
import { getAxiosClient } from '../getAxiosClient';
import { PushNotificationFunction } from '../../types/PushNotificationFunction';
import { receiveResult } from '../../api/receiveResult';
import { Result } from '@yeldirium/result';

const restartShairportService = async function (pushNotification: PushNotificationFunction): Promise<Result<void, CustomError>> {
  const result = await receiveResult<void>(
    async (): Promise<AxiosResponse> => await getAxiosClient().get('/systemd/restartShairportService')
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
  restartShairportService
};
