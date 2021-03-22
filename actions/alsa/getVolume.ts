import { Configuration } from '../../types/Configuration';
import shell from 'shelljs';
import { VolumePercent } from '../../types/VolumePercent';
import { AlsaError, ParsingError } from '../../errors';
import { fail, okay, Result } from '@yeldirium/result';

const volumePercentRegex = /Playback[^[\n]+\[(?<volumePercent>\d{1,3})%\]/u;

const getVolume = async function (configuration: Configuration): Promise<Result<VolumePercent, AlsaError | ParsingError>> {
  return new Promise((resolve): void => {
    shell.exec(`amixer -D ${configuration.alsa.card} sget ${configuration.alsa.device}`, (code, stdout, stderr): void => {
      if (code !== 0) {
        return resolve(fail(new AlsaError(undefined, { cause: code, data: stderr })));
      }

      const match = volumePercentRegex.exec(stdout);

      if (!match) {
        return resolve(fail(new ParsingError('Unable to find the volume in the amixer output', { data: stdout })));
      }

      return resolve(okay(Number.parseInt(match.groups!.volumePercent, 10)));
    });
  });
};

export {
  getVolume
};
