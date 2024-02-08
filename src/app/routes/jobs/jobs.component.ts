import { Component, OnInit, inject } from '@angular/core';
import { JobHistoryComponent } from '../../components/job-history/job-history.component';
import { CommonModule } from '@angular/common';
import { jobHistory } from '../../constants/resume.constants';
import { ActivatedRoute, Router } from '@angular/router';
import { staggerAnimation } from '../../constants/animations.constants';


@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [JobHistoryComponent, CommonModule],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.scss',
  animations: [staggerAnimation],
})
export class JobsComponent implements OnInit {
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);
  type = 'Career';

  constructor() {
    this.activatedRoute.queryParams.subscribe((params) => {
      const type = params['type'];
      this.type = type;

      if (!this.type) {
        this.toggleType('Career');
      }
    });
  }

  allJobHistory = jobHistory;
  jobHistoryKeys = Object.keys(jobHistory);

  ngOnInit(): void {
    console.log(this.allJobHistory);
    console.log(this.jobHistoryKeys);
  }

  toggleType(type: string): void {
    this.router.navigate([], {
      queryParams: { type },
      queryParamsHandling: 'merge', // Keep existing query parameters
    });
  }
}
