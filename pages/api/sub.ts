import type { NextApiHandler } from 'next';

const imageList = ['', '신메뉴'];

const handler: NextApiHandler = (req, res) => {
  res.status(200).json(imageList);
};

export default handler;
