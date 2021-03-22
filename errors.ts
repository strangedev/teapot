import { CustomError, kaputt } from '@yeldirium/kaputt';

class AlsaError extends kaputt('AlsaError') {}
class ParsingError extends kaputt('ParsingError') {}
class SystemdError extends kaputt('SystemdError') {}

const errorNames = {
  AlsaError,
  ParsingError,
  SystemdError
};

type ErrorName = keyof (typeof errorNames);

export interface MarshalledError {
  name: ErrorName;
  message: string;
  cause?: unknown;
  data?: string;
}

const marshalError = function (error: CustomError): MarshalledError {
  return {
    name: error.name as ErrorName,
    message: error.message,
    cause: error.cause,
    data: error.data
  };
};

const unMarshalError = function (error: MarshalledError): CustomError {
  return new errorNames[error.name](
    error.message,
    {
      cause: error.cause,
      data: error.data
    }
  );
};

export {
  AlsaError,
  ParsingError,
  SystemdError,
  errorNames,
  marshalError,
  unMarshalError
};
