import {ApiProperty} from "@nestjs/swagger";

export class BanUserDto {
    @ApiProperty({example: 'flood', description: 'Ban reason'})
    readonly banReason: string;

    @ApiProperty({example: '1', description: 'User id'})
    readonly userId: number;
}