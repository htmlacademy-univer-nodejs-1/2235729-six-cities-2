import { User } from './user.type.js';
import { City } from './city.type.js';
import { Housing } from './housing.type.js';
import { Facility } from './facility.type.js';
import { Coordinates } from './coordinates.type.js';


export type Offer = {
  name: string;
  description: string;
  publicationDate: Date;
  city: City;
  previewImage: string;
  images: string[];
  premium: boolean;
  favorite: boolean;
  rating: number;
  housingType: Housing;
  roomCount: number;
  guestCount: number;
  cost: number;
  facilities: Facility[];
  author: User;
  commentsCount: number;
  coordinates: Coordinates;
}
