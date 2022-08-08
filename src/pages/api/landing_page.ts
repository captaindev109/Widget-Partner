import { NextApiRequest, NextApiResponse } from 'next';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const landing_page_json = require('../../database/landing_page.model.json');

export default function (req: NextApiRequest, res: NextApiResponse) {
  res.json({ data: landing_page_json });
}
