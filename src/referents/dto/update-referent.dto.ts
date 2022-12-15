import { PartialType } from '@nestjs/swagger';
import { CreateReferentDto } from './create-referent.dto';

export class UpdateReferentDto extends PartialType(CreateReferentDto) {}
