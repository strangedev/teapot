import { CustomError } from '@yeldirium/kaputt';
import { marshalError } from '../errors';
import { NextApiResponse } from 'next';
import { isFailed, Result } from '@yeldirium/result';

const sendResult = function<TData> (res: NextApiResponse, result: Result<TData, CustomError>): void {
  if (isFailed(result)) {
    return res.status(500).json({
      status: 'error',
      error: marshalError(result.error)
    });
  }

  return res.json({
    status: 'success',
    data: result.value
  });
};

export {
  sendResult
};
