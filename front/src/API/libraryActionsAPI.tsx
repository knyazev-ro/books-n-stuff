import apiClient from './apiClient';

export const lendBook = async (cardNumber: string, bookId: number): Promise<void> => {
  console.log(cardNumber, bookId)
  await apiClient.post('/readers/lend', { cardNumber, bookId });
};

export const returnBook = async (cardNumber: string, bookId: number): Promise<void> => {
  await apiClient.post('/readers/return',null ,{ params: { cardNumber:cardNumber, bookId:bookId }});
};
