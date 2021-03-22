import { noOp } from './noOp';

const swallowPromise = function (promise: Promise<any>): void {
  promise.then(noOp).catch(noOp);
};

export {
  swallowPromise
};
