import {
  IsArray,
  IsBoolean,
  IsDateString,
  IsInt,
  IsNumber,
  IsObject,
  IsString, Length,
  MaxLength,
  MinLength
} from 'class-validator';
import { City } from '../../../types/city.type.js';
import { Housing } from '../../../types/housing.type.js';
import { Facility } from '../../../types/facility.type.js';
import { Coordinates } from '../../../types/coordinates.type.js';
import { CreateOfferMessage } from './create-offer-message.js';
import { User } from '../../../types/user.type.js';

export class CreateOfferDto {
  @MinLength(10, { message: CreateOfferMessage.name.minLength })
  @MaxLength(100, { message: CreateOfferMessage.name.maxLength })
    name!: string;

  @MinLength(20, { message: CreateOfferMessage.name.minLength })
  @MaxLength(1024, { message: CreateOfferMessage.name.maxLength })
    description!: string;

  @IsDateString({}, { message: CreateOfferMessage.date.invalidFormat })
    date!: Date;

  @IsString({ message: CreateOfferMessage.city.invalidFormat })
    city!: City;

  @IsString({ message: CreateOfferMessage.previewImg.invalidFormat })
    previewImg!: string;

  @IsArray({ message: CreateOfferMessage.images.invalidFormat })
    images!: string[];

  @IsBoolean({ message: CreateOfferMessage.flagIsPremium.invalidFormat })
    flagIsPremium!: boolean;

  @IsBoolean({ message: CreateOfferMessage.flagIsFavourites.invalidFormat })
    flagIsFavourites!: boolean;

  @IsNumber({}, { message: CreateOfferMessage.rating.invalidFormat })
  @Length(1, 5, { message: CreateOfferMessage.rating.lengthField })
    rating!: 1 | 2 | 3 | 4 | 5;

  @IsString({ message: CreateOfferMessage.typeHousing.invalidFormat })
    typeHousing!: Housing;

  @IsInt({ message: CreateOfferMessage.countRooms.invalidFormat })
  @Length(1, 8, { message: CreateOfferMessage.countRooms.lengthField })
    countRooms!: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

  @IsInt({ message: CreateOfferMessage.countPeople.invalidFormat })
  @Length(1, 10, { message: CreateOfferMessage.countPeople.lengthField })
    countPeople!: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

  @IsNumber({}, { message: CreateOfferMessage.price.invalidFormat })
  @Length(100, 100000, { message: CreateOfferMessage.price.lengthField })
    price!: number;

  @IsString({ message: CreateOfferMessage.conveniences.invalidFormat })
    conveniences!: Facility;

  user!: User;

  countComments!: number;

  @IsObject({ message: CreateOfferMessage.coordinates.invalidFormat })
    coordinates!: Coordinates;
}
