import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import credential from '../common/credentials';

export async function authenticate(req: Request, res: Response, next: NextFunction) {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) {
    return res.status(401).json({ message: 'Access Denied' });
  }

  try {
    const verified = jwt.verify(token, credential.postgres.ACCESS_TOKEN_SECRET!);
    (req as any).user = verified;
    next();
  } catch (err) {
    res.status(400).json({ message: 'Invalid Token' });
  }
};

export function authorizeRoles(...roles: string[]) {
  return (req:Request, res:Response, next:NextFunction) => {
    const user = (req as any).user;
    if (!user || !roles.includes(user.role)) {
      return res.status(403).json({error:'error'});
    }
    next();
  };
}