import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { COMPONENTS, ScheduleTaskComponent } from './components';

@NgModule({
  declarations: [COMPONENTS],
  imports: [CommonModule],
  bootstrap: [ScheduleTaskComponent],
})
export class ScheduleTaskModule {}
