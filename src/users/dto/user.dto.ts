import { ApiProperty } from "@nestjs/swagger";


export class CreateOrUpdateUserDto {
    @ApiProperty({
        type: Number,
        nullable : true,
        required : false,
    })
    id : number

    @ApiProperty({
        type : String,
        nullable : false,
        required : true,
    })
    name : string
    
    @ApiProperty({
        type : String,
        nullable : false,
        required : true
    })
    lastName: string;

    @ApiProperty({
        type : String,
        nullable : false,
        required : true,
    })
    password: string;

    @ApiProperty({
        type : String,
        nullable : false,
        required : true,
    })
    email: string;
}