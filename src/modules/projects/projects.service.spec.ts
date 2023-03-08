import { Test, TestingModule } from '@nestjs/testing'
import { DataSource } from 'typeorm'
import { ConfigModule } from '../../core/config/config.module'
import { LoggerModule } from '../../core/logger/logger.module'
import { ProjectsService } from './projects.service'

describe('ProjectsService', () => {
  let service: ProjectsService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule, LoggerModule],
      providers: [ProjectsService, { provide: DataSource, useValue: {} }],
    }).compile()

    service = module.get<ProjectsService>(ProjectsService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
