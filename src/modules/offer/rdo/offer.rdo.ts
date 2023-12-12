import { Expose } from 'class-transformer';
import { City } from '../../../types/city.type.js';
import { Housing } from '../../../types/housing.type';

export class OfferRdo {
  @Expose()
  public name!: string;

  @Expose()
  public publicationDate!: Date;

  @Expose()
  public city!: City;

  @Expose()
  public previewImage!: string;

  @Expose()
  public premium!: boolean;

  @Expose()
  public favorite!: boolean;

  @Expose()
  public rating!: number;

  @Expose()
  public housingType!: Housing;

  @Expose()
  public cost!: number;

  @Expose()
  public commentsCount!: number;
}
