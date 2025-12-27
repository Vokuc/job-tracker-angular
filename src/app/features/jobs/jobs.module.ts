import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobsRoutingModule } from './jobs-routing.module';
import { JobListComponent } from './pages/job-list/job-list.component';

@NgModule({
  declarations: [JobListComponent],
  imports: [
    CommonModule,
    JobsRoutingModule
  ]
})
export class JobsModule { }
