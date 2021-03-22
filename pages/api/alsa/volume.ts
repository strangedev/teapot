import { configuration } from '../../../configuration';
import { flaschenpost } from 'flaschenpost';
import { getVolume } from '../../../actions/alsa/getVolume';
import { ignoreExceptions } from '../../../utils/ignoreExceptions';
import { RequestHandler } from '../../../types/RequestHandler';
import { sendResult } from '../../../api/sendResult';
import { fail } from '@yeldirium/result';
import { setVolume } from '../../../actions/alsa/setVolume';

const logger = flaschenpost.getLogger();

const requestHandler: RequestHandler = function (req, res): void {
  switch (req.method) {
    case 'GET': {
      logger.debug('Getting audio volume...');
      ignoreExceptions(
        getVolume(configuration).then((result): void => {
          sendResult(res, result);
        })
      );
      break;
    }
    case 'PATCH': {
      logger.debug('Setting audio volume...');
      if (!('volumePercent' in req.body)) {
        res.status(400).end();
      }

      const { volumePercent } = req.body;

      if (typeof volumePercent !== 'number') {
        res.status(400).end();
      }
      if (volumePercent < 0 || volumePercent > 100) {
        res.status(400).end();
      }

      ignoreExceptions(
        setVolume(configuration, volumePercent).then((result): void => {
          sendResult(res, result);
        })
      );
      break;
    }
    default: {
      return res.status(400).end();
    }
  }
};

export default requestHandler;
