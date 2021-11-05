import {ApiProperty} from "@nestjs/swagger";

export class AddRoleDto {
    @ApiProperty({example: 'admin', description: 'User role'})
    readonly value: string;

    @ApiProperty({example: '1', description: 'User id'})
    readonly userId: number;
}