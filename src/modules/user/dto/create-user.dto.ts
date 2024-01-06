import { IsEmail, IsString, Length, IsOptional, Matches } from 'class-validator';
import { CreateUserMessage } from './create-user-message.js';
import { UserType } from '../../../types/user.type.js';
import { imageRegExp } from '../../../constants/image.js';

export default class CreateUserDto {
  @IsEmail({}, { message: CreateUserMessage.email.invalidFormat })
  public email!: string;

  @IsOptional()
  @Matches(imageRegExp, { message: 'Photoes must end with .jpg, .jpeg or .png' })
  @IsString({ message: 'AvatarSourcePath msust be a string' })
  public avatar?: string;

  @IsString({ message: CreateUserMessage.name.invalidFormat })
  @Length(1, 15, { message: CreateUserMessage.name.lengthField })
  public name!: string;

  @IsString({ message: CreateUserMessage.userType.invalidFormat })
  public userType!: UserType;

  @IsString({ message: CreateUserMessage.password.invalidFormat })
  @Length(6, 12, { message: CreateUserMessage.password.lengthField })
  public password!: string;
}
