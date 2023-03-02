import { ApiProperty } from '@nestjs/swagger'
import { IsString, MinLength } from 'class-validator'
import { ProjectUsersResponse } from './project-users.api'
import { ProjectResponse } from './project.api'

export class UserToProjectRequest {
  @ApiProperty()
  @IsString()
  @MinLength(1)
  public readonly user: string

  @ApiProperty()
  @IsString()
  @MinLength(1)
  public readonly role: string
}

export class UserToProjectResponse {
  @ApiProperty()
  public readonly project: ProjectResponse

  @ApiProperty()
  public readonly users: ProjectUsersResponse
}
