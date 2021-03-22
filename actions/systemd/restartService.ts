import shell from 'shelljs';
import { SystemdError } from '../../errors';
import { fail, okay, Result } from '@yeldirium/result';

const restartService = async function (serviceName: string): Promise<Result<void, SystemdError>> {
  return new Promise((resolve): void => {
    shell.exec(`sudo systemctl restart ${serviceName}.service`, (code, stdout, stderr): void => {
      if (code === 0) {
        return resolve(okay());
      }

      return resolve(fail(new SystemdError(undefined, { cause: code, data: stderr })));
    });
  });
};

export {
  restartService
};
