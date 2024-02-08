import { Component, OnInit, inject } from '@angular/core';
import { JobHistoryComponent } from '../../components/job-history/job-history.component';
import { CommonModule } from '@angular/common';
import { jobHistory } from '../../constants/resume.constants';
import { ActivatedRoute, Router } from '@angular/router';
import {
  trigger,
  transition,
  query,
  stagger,
  animateChild,
  style,
  animate,
  keyframes,
} from '@angular/animations';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [JobHistoryComponent, CommonModule],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.scss',
  animations: [
    trigger('stagger', [
      transition('* => *', [
        // this hides everything right away
        query(':enter', style({ opacity: 0 })),

        // starts to animate things with a stagger in between
        query(':enter', stagger(50, [animate(250, style({ opacity: 1 }))]), {
          delay: 0,
        }),
      ]),
    ]),
  ],
})
export class JobsComponent implements OnInit {
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);
  type = 'Career';

  constructor() {
    this.activatedRoute.queryParams.subscribe((params) => {
      const type = params['type'];
      this.type = type;
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
