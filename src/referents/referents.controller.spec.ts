import { Test, TestingModule } from '@nestjs/testing';
import { ReferentsController } from './referents.controller';
import { ReferentsService } from './referents.service';

describe('ReferentsController', () => {
  let controller: ReferentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReferentsController],
      providers: [ReferentsService],
    }).compile();

    controller = module.get<ReferentsController>(ReferentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
