import {ApiProperty} from "@nestjs/swagger";
import {IsNumber, IsString} from "class-validator";

export class AddRoleDto {
    @ApiProperty({example: 'admin', description: 'User role'})
    @IsString({message: 'Must be a string'})
    readonly value: string;

    @ApiProperty({example: '1', description: 'User id'})
    @IsNumber({}, {message: 'Must be a number'})
    readonly userId: number;
}