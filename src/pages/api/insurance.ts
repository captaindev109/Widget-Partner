import { NextApiRequest, NextApiResponse } from 'next';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const dynamic_flow = require('../../database/customer_purchase.json');

export default function (req: NextApiRequest, res: NextApiResponse) {
  res.json({ data: dynamic_flow });
}
