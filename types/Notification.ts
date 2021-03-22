import { Urgency } from './Urgency';

export interface Notification {
  headline: string;
  message: string;
  urgency: Urgency;
}
