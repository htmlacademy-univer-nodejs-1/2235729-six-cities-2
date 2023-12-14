import { NextFunction, Request, Response } from 'express';

export type Middleware = {
  execute(req: Request, res: Response, next: NextFunction): void;
};
