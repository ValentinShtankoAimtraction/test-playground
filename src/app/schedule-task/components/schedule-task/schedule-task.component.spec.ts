import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { DUMMY_SCHEDULE } from 'src/app/schedule-task/components/schedule-task/mock-schedule';

import { ScheduleTaskComponent } from './schedule-task.component';

describe('ScheduleTaskComponent', () => {
  let component: ScheduleTaskComponent;
  let fixture: ComponentFixture<ScheduleTaskComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ScheduleTaskComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  Object.values(DUMMY_SCHEDULE).forEach((schedule, index) => {
    it(`${Object.keys(DUMMY_SCHEDULE)[index]}`, () => {
      expect(component.validateDay(schedule)).toBeTruthy();
    });
  });

  it('should validate schedule', () => {
    expect(component.validate(DUMMY_SCHEDULE)).toBeTruthy();
  });
});
