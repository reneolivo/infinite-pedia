import { ListType } from '../types/ListType';
import { getData } from './storage';

export async function getLists(): Promise<ListType[]> {
  const lists = await getData<ListType[]>('lists');

  return lists || [];
}

