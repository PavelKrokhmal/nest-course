import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsString, Length} from "class-validator";

export class CreateUserDto {
    @ApiProperty({example: 'user@mail.com', description: 'User email'})
    @IsString({message: 'Must be a string'})
    @IsEmail({}, {message: 'Incorrect email'})
    readonly email: string;

    @ApiProperty({example: '12345678', description: 'User password'})
    @IsString({message: 'Must be a string'})
    @Length(4, 16, {message: 'Length must be in range 4-16 symbols'})
    readonly password: string;
}