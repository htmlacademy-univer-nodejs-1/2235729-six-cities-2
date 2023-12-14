import { inject, injectable } from 'inversify';
import { Response, Request } from 'express';
import { StatusCodes } from 'http-status-codes';
import { Controller } from '../../core/controller/controller.js';
import { Component } from '../../types/component.type.js';
import { LoggerType } from '../../core/logger/logger.type.js';
import { CommentService } from './comment.service.js';
import { OfferService } from '../offer/offer.service.js';
import { HttpMethod } from '../../types/http-method.type.js';
import { HttpError } from '../../core/http/http-error.type.js';
import { fillDTO } from '../../core/helpers/common.js';
import { CommentRdo } from './rdo/comment-rdo.js';
import { CreateCommentDto } from './dto/create-comment.dto.js';

@injectable()
export class CommentController extends Controller {
  constructor(
    @inject(Component.Logger) protected readonly logger: LoggerType,
    @inject(Component.CommentService) private readonly commentService: CommentService,
    @inject(Component.OfferService) private readonly offerService: OfferService,
  ) {
    super(logger);

    this.logger.info('Register routes for CommentController…');
    this.addRoute({ path: '/', method: HttpMethod.Post, handler: this.create });
  }

  public async create(
    { body }: Request<Record<string, unknown>, Record<string, unknown>, CreateCommentDto>,
    res: Response
  ): Promise<void> {


    if (!await this.offerService.exists(body.offerId)) {
      throw new HttpError(
        StatusCodes.NOT_FOUND,
        `Offer with id ${body.offerId} not found.`,
        'CommentController'
      );
    }

    const comment = await this.commentService.createForOffer(body);
    await this.offerService.incComment(body.offerId);
    this.created(res, fillDTO(CommentRdo, comment));
  }
}
