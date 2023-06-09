import { Test, TestingModule } from '@nestjs/testing'
import { ProjectsController } from './projects.controller'
import { ProjectsService } from './projects.service'
import { BoardsService } from './boards.service'

describe('ProjectsController', () => {
  let controller: ProjectsController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProjectsController],
      providers: [
        { provide: ProjectsService, useValue: {} },
        { provide: BoardsService, useValue: {} },
      ],
    }).compile()

    controller = module.get<ProjectsController>(ProjectsController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
