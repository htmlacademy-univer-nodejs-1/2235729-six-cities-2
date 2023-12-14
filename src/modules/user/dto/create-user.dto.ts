import { IsEmail, IsString, Length } from 'class-validator';
import { CreateUserMessage } from './create-user-message.js';
import { UserType } from '../../../types/user.type.js';

export default class CreateUserDto {
  @IsEmail({}, { message: CreateUserMessage.email.invalidFormat })
  public email!: string;

  @IsString({ message: CreateUserMessage.avatarPath.invalidFormat })
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
