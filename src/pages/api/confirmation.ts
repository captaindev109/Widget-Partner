import { NextApiRequest, NextApiResponse } from 'next';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const confirmation_json = require('../../database/confirmation.model.json');

export default function (req: NextApiRequest, res: NextApiResponse) {
  res.json({ data: confirmation_json });
}
