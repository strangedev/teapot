import { Container } from './Container';
import { Headline } from './Headline';
import { ResponsiveTextSize } from '../responsive/ResponsiveTextSize';
import { Urgency } from '../../types/Urgency';
import React, { FunctionComponent, ReactElement } from 'react';

interface NotificationProps {
  headline: string;
  message: string;
  urgency: Urgency;
}

const Notification: FunctionComponent<NotificationProps> = function ({
  headline,
  message,
  urgency
}): ReactElement {
  return (
    <Container urgency={ urgency }>
      <ResponsiveTextSize>
        <Headline urgency={ urgency }>
          { headline }
        </Headline>
        <div>
          { message }
        </div>
      </ResponsiveTextSize>
    </Container>
  );
};

export {
  Notification
};
