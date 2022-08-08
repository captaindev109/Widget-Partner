import { NextApiRequest, NextApiResponse } from 'next';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const checkout_json = require('../../database/checkout.model.json');

export default function (req: NextApiRequest, res: NextApiResponse) {
  res.json({ data: checkout_json });
}
