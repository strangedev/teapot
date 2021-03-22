import { flaschenpost } from 'flaschenpost';
import { ignoreExceptions } from '../../../utils/ignoreExceptions';
import { RequestHandler } from '../../../types/RequestHandler';
import { restartService } from '../../../actions/systemd/restartService';
import { sendResult } from '../../../api/sendResult';

const logger = flaschenpost.getLogger();

const requestHandler: RequestHandler = function (req, res): void {
  logger.debug('Restarting shairport...');
  ignoreExceptions(
    restartService('shairport-sync').then((result): void => {
      sendResult(res, result);
    })
  );
};

export default requestHandler;
