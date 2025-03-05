import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  // ...existing code...
};

export default handler;
