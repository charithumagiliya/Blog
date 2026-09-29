import { TagEntity } from '@/tag/tag.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TagService {
  constructor(
    @InjectRepository(TagEntity) private tagRespository: Repository<TagEntity>,
  ) {}

  async getAll() {
    return await this.tagRespository.find();
    //return ['ai', 'typescript', 'javascript', 'nestjs', 'coding'];
  }
}
