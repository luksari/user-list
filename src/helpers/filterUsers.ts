import { IUser } from '../data';

export const filterUsers: (arr: IUser[]) => (name: string) => IUser[] = arr => name =>
  arr.filter(user => user.name.toLowerCase().includes(name.toLowerCase()));
