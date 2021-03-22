import { noOp } from './noOp';

const ignoreExceptions = function (promise: Promise<any>): void {
  promise.catch(noOp);
};

export {
  ignoreExceptions
};
