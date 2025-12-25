import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Job } from '../models/job.model';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private jobs$ = new BehaviorSubject<Job[]>([]);

  getJobs() {
    return this.jobs$.asObservable();
  }

  addJob(job: Job) {
    this.jobs$.next([...this.jobs$.value, job]);
  }

  updateJob(updatedJob: Job) {
    this.jobs$.next(
      this.jobs$.value.map(job => 
        job.id === updatedJob.id ? updatedJob : job
      )
    );
  }

  deleteJob(id: string) {
    this.jobs$.next(this.jobs$.value.filter(job => job.id !== id));
  }
}
