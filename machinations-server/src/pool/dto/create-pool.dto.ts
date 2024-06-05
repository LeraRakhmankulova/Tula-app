import { IsNotEmpty } from "class-validator"
export class CreatePoolDto {
    title: string

    @IsNotEmpty()
    value: number
}
