import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {
  Schedule,
  ScheduleDay,
  ScheduleTimespan,
} from 'src/app/schedule-task/types';

@Component({
  selector: 'app-schedule-task',
  templateUrl: './schedule-task.component.html',
  styleUrls: ['./schedule-task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScheduleTaskComponent {
  validate = (schedule: Schedule): boolean => {
    return Object.values(schedule).reduce(
      (previousValue, currentValue, currentIndex, array) => {
        return previousValue && this.validateDay(currentValue);
      },
      true
    );
  };

  validateDay = (scheduleDay: ScheduleDay): boolean => {
    const { timespans, commit, start, end } = scheduleDay;
    return (
      this.validateCommit(timespans, commit) &&
      this.validateStartTimespan(start, timespans[0]) &&
      this.validateEndTimespan(end, timespans[timespans.length - 1]) &&
      this.validateStartEndTimespans(timespans)
    );
  };

  validateCommit = (timespans: ScheduleTimespan[], commit: number): boolean => {
    const sumOverbook = timespans.reduce(
      (previousValue, currentValue) => previousValue + currentValue.overbook,
      0
    );
    return sumOverbook === commit;
  };

  validateStartTimespan = (
    start: number,
    timespan: ScheduleTimespan
  ): boolean => {
    return start === timespan.start;
  };

  validateEndTimespan = (end: number, timespan: ScheduleTimespan): boolean => {
    return end === timespan.end;
  };

  validateStartEndTimespans = (timespans: ScheduleTimespan[]): boolean => {
    const isValid = timespans.reduce(
      (previousValue, currentValue, currentIndex, array) => {
        if (currentIndex + 1 === array.length) {
          return previousValue;
        }
        return (
          previousValue && currentValue.end === array[currentIndex + 1].start
        );
      },
      true
    );
    return isValid;
  };
}
