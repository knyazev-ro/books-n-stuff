import apiClient from './apiClient';

export interface Reader {
  id?: number;
  name: string;
  cardNumber: string;
}

export const getReaders = async (): Promise<Reader[]> => {
  const response = await apiClient.get('/readers');
  return response.data;
};

export const createReader = async (name: string): Promise<Reader> => {
  const response = await apiClient.post('/readers/create', {name});
  return response.data;
};

export const getReaderBookCount = async (): Promise<Record<string, number>> => {
  const response = await apiClient.get('/readers/book-count');
  return response.data;
};
