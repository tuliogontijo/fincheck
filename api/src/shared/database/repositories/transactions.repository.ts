import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';

import { PrismaService } from '../prisma.service';

@Injectable()
export class TransactionsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDTO: Prisma.TransactionCreateArgs) {
    return this.prismaService.transaction.create(createDTO);
  }

  findMany(findAllDTO: Prisma.TransactionFindManyArgs) {
    return this.prismaService.transaction.findMany(findAllDTO);
  }

  findFirst(findFirstDTO: Prisma.TransactionFindFirstArgs) {
    return this.prismaService.transaction.findFirst(findFirstDTO);
  }

  update(updateDTO: Prisma.TransactionUpdateArgs) {
    return this.prismaService.transaction.update(updateDTO);
  }

  delete(deleteDTO: Prisma.TransactionDeleteArgs) {
    return this.prismaService.transaction.delete(deleteDTO);
  }
}
