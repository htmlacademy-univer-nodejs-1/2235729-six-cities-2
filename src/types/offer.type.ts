import { User } from './user.type.js';
import { City } from './city.type.js';
import { Housing } from './housing.type.js';
import { Facility } from './facility.type.js';
import { Coordinates } from './coordinates.type.js';


export type Offer = {
  name: string;
  description: string;
  date: Date;
  city: City;
  previewImg: string;
  images: string[];
  flagIsPremium: boolean;
  flagIsFavourites: boolean;
  rating: 1 | 2 | 3 | 4 | 5;
  typeHousing: Housing;
  countRooms: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  countPeople: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  price: number;
  conveniences: Facility;
  author: User;
  countComments: number;
  coordinates: Coordinates;
}
