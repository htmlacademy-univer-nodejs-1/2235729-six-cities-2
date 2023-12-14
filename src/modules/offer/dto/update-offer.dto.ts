import {
  IsArray,
  IsBoolean,
  IsDateString,
  IsInt,
  IsMongoId,
  IsNumber, IsObject, IsOptional,
  IsString, Length,
  MaxLength,
  MinLength
} from 'class-validator';
import { City } from '../../../types/city.type.js';
import { Housing } from '../../../types/housing.type.js';
import { Facility } from '../../../types/facility.type.js';
import { User } from '../../../types/user.type.js';
import { Coordinates } from '../../../types/coordinates.type.js';
import { CreateOfferMessage } from './create-offer-message.js';

export class UpdateOfferDto{
  @IsOptional()
  @MinLength(10, { message: CreateOfferMessage.name.minLength })
  @MaxLength(100, { message: CreateOfferMessage.name.maxLength })
    name?: string;

  @IsOptional()
  @MinLength(20, { message: CreateOfferMessage.name.minLength })
  @MaxLength(1024, { message: CreateOfferMessage.name.maxLength })
    description?: string;

  @IsOptional()
  @IsDateString({}, { message: CreateOfferMessage.date.invalidFormat })
    date?: Date;

  @IsOptional()
  @IsString({ message: CreateOfferMessage.city.invalidFormat })
    city?: City;

  @IsOptional()
  @IsString({ message: CreateOfferMessage.previewImg.invalidFormat })
    previewImg?: string;

  @IsOptional()
  @IsArray({ message: CreateOfferMessage.images.invalidFormat })
    images?: string[];

  @IsOptional()
  @IsBoolean({ message: CreateOfferMessage.flagIsPremium.invalidFormat })
    flagIsPremium!: boolean;

  @IsOptional()
  @IsBoolean({ message: CreateOfferMessage.flagIsFavourites.invalidFormat })
    flagIsFavourites?: boolean;

  @IsOptional()
  @IsNumber({}, { message: CreateOfferMessage.rating.invalidFormat })
  @Length(1, 5, { message: CreateOfferMessage.rating.lengthField })
    rating?: 1 | 2 | 3 | 4 | 5;

  @IsOptional()
  @IsString({ message: CreateOfferMessage.typeHousing.invalidFormat })
    typeHousing?: Housing;

  @IsOptional()
  @IsInt({ message: CreateOfferMessage.countRooms.invalidFormat })
  @Length(1, 8, { message: CreateOfferMessage.countRooms.lengthField })
    countRooms?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

  @IsOptional()
  @IsInt({ message: CreateOfferMessage.countPeople.invalidFormat })
  @Length(1, 10, { message: CreateOfferMessage.countPeople.lengthField })
    countPeople?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

  @IsOptional()
  @IsNumber({}, { message: CreateOfferMessage.price.invalidFormat })
  @Length(100, 100000, { message: CreateOfferMessage.price.lengthField })
    price?: number;

  @IsOptional()
  @IsString({ message: CreateOfferMessage.conveniences.invalidFormat })
    conveniences?: Facility;

  @IsOptional()
  @IsMongoId({ message: CreateOfferMessage.author.invalidId })
    author?: User;

  @IsOptional()
    countComments?: number;

  @IsOptional()
  @IsObject({ message:CreateOfferMessage.coordinates.invalidFormat })
    coordinates?: Coordinates;
}
