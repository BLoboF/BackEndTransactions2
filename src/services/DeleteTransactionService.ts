import { getCustomRepository } from 'typeorm';

import AppError from '../errors/AppError';

import TransactionsRepository from '../repositories/TransactionsRepository';

interface Request {
  id: string;
}

class DeleteTransactionService {
  public async execute({ id }: Request): Promise<void> {
    const transactionsRepository = getCustomRepository(TransactionsRepository);
    const deleteTransaction = await transactionsRepository.findOne(id);

    if (!deleteTransaction) {
      throw new AppError('Transaction not Found.');
    }

    await transactionsRepository.remove(deleteTransaction);
  }
}

export default DeleteTransactionService;
