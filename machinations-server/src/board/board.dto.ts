import { IsBoolean, IsOptional, IsString } from "class-validator"

export class BoardDto {
    countComponents: number

    @IsBoolean()
    isFavorite: boolean

    // @IsOptional()
    @IsString()
    coverImage: string

    @IsString()
    title: string

    // @IsOptional()
    @IsString()
    description: string
}
