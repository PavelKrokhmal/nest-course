import {ApiProperty} from "@nestjs/swagger";

export class CreateRoleDto {
    @ApiProperty({example: 'admin', description: 'Role'})
    readonly value: string;

    @ApiProperty({example: 'admin', description: 'Role description'})
    readonly description: string;
}