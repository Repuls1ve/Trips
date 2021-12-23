import { Type } from 'class-transformer'
import { IsNumber, IsOptional, Min } from 'class-validator'

export class PaginationQueryDto {
  @IsNumber()
  @Min(0)
  @IsOptional()
  @Type(() => Number)
  limit: number

  @IsNumber()
  @Min(0)
  @IsOptional()
  @Type(() => Number)
  offset: number
}