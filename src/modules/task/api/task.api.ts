import { ApiProperty } from '@nestjs/swagger'

export class TaskResponse {
  @ApiProperty()
  public readonly id: number

  @ApiProperty()
  public readonly number: number

  @ApiProperty()
  public readonly title: string

  @ApiProperty()
  public readonly description: string

  @ApiProperty()
  public readonly index: number

  @ApiProperty()
  public readonly stageId: number

  @ApiProperty()
  public readonly createdAt: string

  @ApiProperty()
  public readonly updatedAt: string
}
