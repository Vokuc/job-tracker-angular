import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobListComponent } from './pages/job-list/job-list.component';
import { JobFormComponent } from './pages/job-form/job-form.component';

const routes: Routes = [
  { path: '', component: JobListComponent },
  { path: 'new', component: JobFormComponent },
  { path: 'edit/:id', component: JobFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobsRoutingModule { }
