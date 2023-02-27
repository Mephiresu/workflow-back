import { ApiProperty } from '@nestjs/swagger'
import { IsString, MinLength } from 'class-validator'

export class SignInRequest {
  @ApiProperty()
  @IsString()
  @MinLength(3)
  public readonly username: string

  @ApiProperty()
  @IsString()
  @MinLength(8)
  public readonly password: string
}
