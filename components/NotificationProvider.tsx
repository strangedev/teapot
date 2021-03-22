import { Notification } from '../types/Notification';
import { NotificationContext } from '../ux/notifications';
import React, { FunctionComponent, ReactElement, useState } from 'react';

const NotificationProvider: FunctionComponent = function ({ children }): ReactElement {
  const [ notifications, setNotifications ] = useState<Notification[]>([]);

  return (
    <NotificationContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        notifications,
        pushNotification: (notification: Notification): void =>
          setNotifications([{ ...notification, headline: `${new Date().toLocaleTimeString('de')} - ${notification.headline}` }, ...notifications ])
      }}
    >
      { children }
    </NotificationContext.Provider>
  );
};

export {
  NotificationProvider
};
