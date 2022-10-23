// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

const menuList = ['프로모션', '신메뉴'];

const handler: NextApiHandler = (req, res) => {
  res.status(200).json(menuList);
};
