import { Test, TestingModule } from '@nestjs/testing'
import { DataSource } from 'typeorm'
import { ConfigModule } from '../../core/config/config.module'
import { LoggerModule } from '../../core/logger/logger.module'
import { PasswordsService } from '../auth/services/passwords.service'
import { UsersService } from './users.service'
import { UsersRepository } from './users.repository'

describe('UsersService', () => {
  let service: UsersService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [LoggerModule, ConfigModule],
      providers: [
        UsersService,
        { provide: DataSource, useValue: {} },
        { provide: PasswordsService, useValue: {} },
        { provide: UsersRepository, useValue: {} },
      ],
    }).compile()

    service = module.get<UsersService>(UsersService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
