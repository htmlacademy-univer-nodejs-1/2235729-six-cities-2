import { Container } from 'inversify';
import { types } from '@typegoose/typegoose';
import { CommentEntity, CommentModel } from './comment.entity.js';
import { CommentServiceType } from './comment-service.type.js';
import { CommentService } from './comment.service.js';
import { Component } from '../../types/component.type.js';
import { CommentController } from './comment.controller.js';

export function createCommentContainer() {
  const commentContainer = new Container();

  commentContainer.bind<CommentServiceType>(Component.CommentService).to(CommentService).inSingletonScope();
  commentContainer.bind<types.ModelType<CommentEntity>>(Component.CommentModel).toConstantValue(CommentModel);
  commentContainer.bind<CommentController>(Component.CommentController).to(CommentController).inSingletonScope();

  return commentContainer;
}
