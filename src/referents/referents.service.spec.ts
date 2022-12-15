import { Test, TestingModule } from '@nestjs/testing';
import { ReferentsService } from './referents.service';

describe('ReferentsService', () => {
  let service: ReferentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReferentsService],
    }).compile();

    service = module.get<ReferentsService>(ReferentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
