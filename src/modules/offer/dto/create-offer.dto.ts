import { City } from '../../../types/city.type.js';
import { Housing } from '../../../types/housing.type.js';
import { Facility } from '../../../types/facility.type.js';
import { Coordinates } from '../../../types/coordinates.type.js';

export default class CreateOfferDto {
  public name!: string;
  public description!: string;
  public publicationDate!: Date;
  public city!: City;
  public previewImage!: string;
  public images!: string[];
  public premium!: boolean;
  public favorite!: boolean;
  public rating!: number;
  public housingType!: Housing;
  public roomCount!: number;
  public guestCount!: number;
  public cost!: number;
  public facilities!: Facility[];
  public userId!: string;
  public commentsCount!: number;
  public coordinates!: Coordinates;
}
