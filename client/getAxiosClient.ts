import { configuration } from '../configuration';
import axios, { AxiosInstance } from 'axios';

const getAxiosClient = function (): AxiosInstance {
  return axios.create({
    // eslint-disable-next-line @typescript-eslint/naming-convention
    baseURL: `${configuration.baseUrl}/api`,
    timeout: 1_000,
    validateStatus: (): boolean => true
  });
};

export {
  getAxiosClient
};
