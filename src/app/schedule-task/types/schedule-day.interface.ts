import { ScheduleTimespan } from './schedule-timespan.interface';

export interface ScheduleDay {
  start: number;
  end: number;
  commit: number;
  timespans: ScheduleTimespan[];
}
