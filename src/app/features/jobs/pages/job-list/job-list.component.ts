import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';
import { Job } from '../../../../core/models/job.model';
import { JobService } from '../../../../core/services/job.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent implements OnInit {
  jobs$!: Observable<Job[]>;

  constructor(private jobService: JobService) {}

  ngOnInit(): void {
    this.jobs$ = this.jobService.getJobs();
  }

  deleteJob(id: string) {
    this.jobService.deleteJob(id);
  }
}