import { Coordinates } from './coordinates.type';

export type CityWithCoordinates = {
  [name: string]: Coordinates
}

export enum City {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}
