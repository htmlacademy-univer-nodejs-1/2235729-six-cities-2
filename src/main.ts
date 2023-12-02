import 'reflect-metadata';
import { Container } from 'inversify';
import { Component } from './types/component.type.js';
import Application from './app/application.js';
import { createUserContainer } from './modules/user/user.container.js';
import { createApplicationContainer } from './app/api.container.js';
import { createOfferContainer } from './modules/offer/offer.contatiner.js';


const mainContainer = Container.merge(createApplicationContainer(),
  createUserContainer(),
  createOfferContainer());
const application = mainContainer.get<Application>(Component.Application);

await application.init();
