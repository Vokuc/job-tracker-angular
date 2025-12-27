import { TestBed } from '@angular/core/testing';
import { JobService } from './job.service';
import { Job } from '../models/job.model';

describe('JobService', () => {
  let service: JobService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobService);
  });

  it('should add a job', (done) => {
    const job: Job = {
      id: '1',
      company: 'Google',
      //position: 'Software Developer',
      status: 'Applied',
      appliedDate: '2024-06-01'
    };

    service.addJob(job);

    service.getJobs().subscribe(jobs => {
      expect(jobs.length).toBe(1);
      expect(jobs[0].company).toBe('Google');
      done();
    })
  });

  it('should delete a job', (done) => {
    service.deleteJob('1');

    service.getJobs().subscribe(jobs => {
      expect(jobs.length).toBe(0);
      done();
    })
  })
});
