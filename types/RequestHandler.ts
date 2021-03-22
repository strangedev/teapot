import { NextApiRequest, NextApiResponse } from 'next';

type RequestHandler = (req: NextApiRequest, res: NextApiResponse) => void | Promise<void>;

export type {
  RequestHandler
};
