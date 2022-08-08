import { NextApiRequest, NextApiResponse } from 'next';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const payment_json = require('../../database/payment.model.json');

export default function (req: NextApiRequest, res: NextApiResponse) {
  res.json({ data: payment_json });
}
