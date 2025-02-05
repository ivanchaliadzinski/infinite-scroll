import { User } from './generic';

export type GetUsersResponse = {
  users: User[];
  total: number;
  skip: number;
  limit: number;
};
