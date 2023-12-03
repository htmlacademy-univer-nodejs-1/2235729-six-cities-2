import { DocumentType } from '@typegoose/typegoose/lib/types.js';
import { CreateCommentDto } from './dto/create-comment.dto';
import { CommentEntity } from './comment.entity.js';

export type CommentServiceType = {
  createForOffer(dto: CreateCommentDto): Promise<DocumentType<CommentEntity>>;
  findByOfferId(offerId: string): Promise<DocumentType<CommentEntity>[]>;
  deleteByOfferId(offerId: string): Promise<number | null>;
}
