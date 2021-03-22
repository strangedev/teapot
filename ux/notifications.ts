import { noOp } from '../utils/noOp';
import { Notification } from '../types/Notification';
import { PushNotificationFunction } from '../types/PushNotificationFunction';
import React from 'react';

const NotificationContext = React.createContext({
  notifications: [] as Notification[],
  pushNotification: noOp as PushNotificationFunction
});

export {
  NotificationContext
};
