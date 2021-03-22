import { Button } from '../../inputs/Button';
import { CustomError } from '@yeldirium/kaputt';
import { NotificationContext } from '../../../ux/notifications';
import { restartShairportService } from '../../../client/systemd/restartShairportService';
import { Result } from '@yeldirium/result';
import React, { FunctionComponent, ReactElement, useContext } from 'react';

const ShairportClient: FunctionComponent = function (): ReactElement {
  const { pushNotification } = useContext(NotificationContext);

  return (
    <Button
      onClick={
        async (): Promise<Result<void, CustomError>> => await restartShairportService(pushNotification)
      }
    >
      restart shairport
    </Button>
  );
};

export {
  ShairportClient
};
