import { City } from './city.type';
import { Coordinates } from './coordinates.type';
import { Facility } from './facility.type';
import { Housing } from './housing.type';

export type Offer = {
  title: string,
  description: string,
  publishDate: Date,
  city: City,
  previewImage: string,
  images: string[],
  isPremium: boolean,
  isFavourite: boolean,
  rating: number,
  housingType: Housing,
  roomsNumber: number,
  guestsNumber: number,
  price: number,
  facilities: Facility[],
  authorId: string,
  commentsIds: string[],
  commentsNumber: number,
  coordinates: Coordinates
}
