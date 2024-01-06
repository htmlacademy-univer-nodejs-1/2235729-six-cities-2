import { StatusCodes } from 'http-status-codes';
import { NextFunction, Request, Response } from 'express';
import { Middleware, DocumentExistInterface } from './middleware.types.js';
import { HttpError } from '../http/http-error.type.js';

export class DocumentExistsMiddleware implements Middleware {
  constructor(
    private readonly service: DocumentExistInterface,
    private readonly entityName: string,
    private readonly paramName: string,
  ) {}

  public async execute({ params }: Request, _res: Response, next: NextFunction): Promise<void> {
    const documentId = params[this.paramName];
    if (!await this.service.exists(documentId)) {
      throw new HttpError(
        StatusCodes.NOT_FOUND,
        `${this.entityName} with ${documentId} not found.`,
        'DocumentExistsMiddleware'
      );
    }

    next();
  }
}
