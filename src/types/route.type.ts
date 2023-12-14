import { NextFunction, Request, Response } from 'express';
import { HttpMethod } from './http-method.type.js';
import { Middleware } from '../core/middleware/middleware.type.js';

export interface RouteInterface {
  path: string;
  method: HttpMethod;
  handler: (req: Request, res: Response, next: NextFunction) => void;
  middlewares?: Middleware[];
}
