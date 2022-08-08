import { NextApiRequest, NextApiResponse } from 'next';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const offer_json = require('../../database/offer.model.json');

export default function (req: NextApiRequest, res: NextApiResponse) {
  res.json({ data: offer_json });
}
