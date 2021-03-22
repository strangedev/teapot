import { AlsaClient } from '../components/clients/alsa';
import { Centering } from '../components/layouts/Centering';
import { flaschenpost } from 'flaschenpost';
import { getVolume } from '../client/alsa/getVolume';
import { Headline } from '../components/Headline';
import { marshalError } from '../errors';
import { noOp } from '../utils/noOp';
import { Notification } from '../components/Notification';
import { NotificationContext } from '../ux/notifications';
import { PushNotificationFunction } from '../types/PushNotificationFunction';
import { ResponsiveTextSize } from '../components/responsive/ResponsiveTextSize';
import { ShairportClient } from '../components/clients/shairport';
import { Space } from '../components/layouts/Space';
import { unpackOrDefault } from '@yeldirium/result';
import { VolumePercent } from '../types/VolumePercent';
import React, { FunctionComponent, ReactElement, useContext } from 'react';

const logger = flaschenpost.getLogger();

interface IndexProps {
  volumePercent: VolumePercent;
}

const Index: FunctionComponent<IndexProps> = function ({ volumePercent }): ReactElement {
  const { notifications } = useContext(NotificationContext);

  return (
    <Centering>
      <ResponsiveTextSize>
        <Headline />
      </ResponsiveTextSize>
      <Space size='large' />
      <AlsaClient initialVolume={ volumePercent } />
      <Space size='medium' />
      <ShairportClient />
      <Space size='medium' />
      {
        notifications.reverse().slice(0, 5).map(({ headline, message, urgency }): ReactElement => (
          <Notification
            key={ headline }
            headline={ headline }
            message={ message }
            urgency={ urgency }
          />
        ))
      }
    </Centering>
  );
};

const getServerSideProps = async function (): Promise<{ props: IndexProps }> {
  const getVolumeResult = await getVolume(noOp as PushNotificationFunction);

  if (getVolumeResult.isFailed) {
    logger.error(JSON.stringify(marshalError(getVolumeResult.error)));
  }

  return {
    props: {
      volumePercent: unpackOrDefault(55, getVolumeResult)
    }
  };
};

export {
  getServerSideProps
};
export default Index;

