import { Injectable } from '@nestjs/common';
import { CategoriesRepository } from 'src/shared/database/repositories/categories.repository';

@Injectable()
export class CategoriesService {
  constructor(private readonly categoriesRepo: CategoriesRepository) {}

  findAllbyUserId(userId: string) {
    return this.categoriesRepo.findMany({
      where: { userId },
    });
  }
}
