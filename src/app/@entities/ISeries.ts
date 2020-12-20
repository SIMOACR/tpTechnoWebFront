import {IUser} from './IUser';

export interface ISeries {
  id: number;
  title: string;
  description: string;
  publicAccess: string;
  user: IUser;
}
