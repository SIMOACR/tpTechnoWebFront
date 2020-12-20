import {ITag} from './ITag';
import {ISeries} from './ISeries';

export interface IEvent {
  id: number;
  eventDate: Date;
  value: number;
  comment: string;
  series: ISeries;
  tagList: Array<ITag>;
}
