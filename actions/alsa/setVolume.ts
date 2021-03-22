import { Configuration } from '../../types/Configuration';
import shell from 'shelljs';
import { VolumePercent } from '../../types/VolumePercent';
import { AlsaError, ParsingError } from '../../errors';
import { fail, okay, Result } from '@yeldirium/result';

const setVolume = async function (configuration: Configuration, volumePercent: VolumePercent): Promise<Result<void, AlsaError | ParsingError>> {
  return new Promise((resolve): void => {
    shell.exec(`amixer -D ${configuration.alsa.card} sset ${configuration.alsa.device} ${volumePercent}%`, (code, stdout, stderr): void => {
      if (code !== 0) {
        return resolve(fail(new AlsaError(undefined, { cause: code, data: stderr })));
      }

      return resolve(okay());
    });
  });
};

export {
  setVolume
};
