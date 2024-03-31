import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';

import { PrismaService } from '../prisma.service';

@Injectable()
export class BankAccountsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createBankAccountDTO: Prisma.BankAccountCreateArgs) {
    return this.prismaService.bankAccount.create(createBankAccountDTO);
  }

  findMany<T extends Prisma.BankAccountFindManyArgs>(
    findAllBankAccountsDTO: Prisma.SelectSubset<
      T,
      Prisma.BankAccountFindManyArgs
    >,
  ) {
    return this.prismaService.bankAccount.findMany(findAllBankAccountsDTO);
  }

  findFirst(findFirstBankAccountsDTO: Prisma.BankAccountFindFirstArgs) {
    return this.prismaService.bankAccount.findFirst(findFirstBankAccountsDTO);
  }

  update(updateBankAccountDTO: Prisma.BankAccountUpdateArgs) {
    return this.prismaService.bankAccount.update(updateBankAccountDTO);
  }

  delete(deleteBankAccountDTO: Prisma.BankAccountDeleteArgs) {
    return this.prismaService.bankAccount.delete(deleteBankAccountDTO);
  }
}
