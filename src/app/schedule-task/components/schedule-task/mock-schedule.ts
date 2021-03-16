import { Schedule, ScheduleDay } from 'src/app/schedule-task/types';

const MOCK_DAY_SCHEDULE: ScheduleDay = {
  end: 17,
  start: 8,
  commit: 5,
  timespans: [
    {
      end: 9,
      start: 8,
      overbook: 1,
    },
    {
      end: 13,
      start: 9,
      overbook: 3,
    },
    {
      end: 17,
      start: 13,
      overbook: 1,
    },
  ],
};
const MOCK_DAY_SCHEDULE_2 = {
  end: 17,
  start: 8,
  commit: 5,
  timespans: [
    {
      end: 9,
      start: 8,
      overbook: 1,
    },
    {
      end: 10,
      start: 9,
      overbook: 1,
    },
    {
      end: 11,
      start: 10,
      overbook: 1,
    },
    {
      end: 13,
      start: 11,
      overbook: 1,
    },
    {
      end: 17,
      start: 13,
      overbook: 1,
    },
  ],
};
export const DUMMY_SCHEDULE: Schedule = {
  monday: MOCK_DAY_SCHEDULE,
  tuesday: MOCK_DAY_SCHEDULE_2,
  wednesday: MOCK_DAY_SCHEDULE,
  thursday: MOCK_DAY_SCHEDULE,
  friday: MOCK_DAY_SCHEDULE,
  saturday: MOCK_DAY_SCHEDULE,
  sunday: MOCK_DAY_SCHEDULE,
};
