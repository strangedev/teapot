
import { AxiosResponse } from 'axios';
import { CustomError } from '@yeldirium/kaputt';
import { unMarshalError } from '../errors';
import { fail, okay, Result } from '@yeldirium/result';

const receiveResult = async function<TData> (fetchFunction: () => Promise<AxiosResponse>): Promise<Result<TData, CustomError>> {
  const { data, status } = await fetchFunction();

  if (status === 200) {
    return okay(data.data);
  }

  return fail(unMarshalError(data.error));
};

export {
  receiveResult
};
