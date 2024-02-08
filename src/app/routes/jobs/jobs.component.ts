import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  ViewChild,
  inject,
} from '@angular/core';
import { JobHistoryComponent } from '../../components/job-history/job-history.component';
import { CommonModule } from '@angular/common';
import { jobHistory } from '../../constants/resume.constants';
import { ActivatedRoute, Router } from '@angular/router';
import { staggerAnimation } from '../../constants/animations.constants';
import { skills } from '../../constants/skills.constants';
import WordCloud from 'wordcloud';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [JobHistoryComponent, CommonModule],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.scss',
  animations: [staggerAnimation],
})
export class JobsComponent implements AfterViewInit {
  @ViewChild('wordCloudCanvas') wordCloudCanvas!: ElementRef;
  @ViewChild('wordCloudCanvasParent') wordCloudCanvasParent!: ElementRef;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
  
    // Check if the change is primarily horizontal (width change)
    if (windowWidth !== this.lastWindowWidth) {
      // Your logic for handling horizontal resize here
      this.resizeCanvas();
    }
  
    // Store the current window width for comparison in the next resize event
    this.lastWindowWidth = windowWidth;
  }
  
  lastWindowWidth = 0;

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

      setTimeout(() => {
        this.resizeCanvas();
        this.renderCanvas();
      });
    });
  }

  allJobHistory = jobHistory;
  jobHistoryKeys = Object.keys(jobHistory);

  ngAfterViewInit() {
    this.resizeCanvas();
    this.renderCanvas();
  }

  resizeCanvas() {
    this.wordCloudCanvas.nativeElement.width =
      this.wordCloudCanvasParent.nativeElement.clientWidth;
    this.wordCloudCanvas.nativeElement.height =
      this.wordCloudCanvasParent.nativeElement.clientHeight;
    this.renderCanvas();
  }

  renderCanvas() {
    WordCloud(this.wordCloudCanvas.nativeElement, {
      list: skills,
      weightFactor: 5,
      gridSize: 20,
      color: '#e1e1e1',
      backgroundColor: '#1a1a1a',
      rotateRatio: 0.3,
    });
  }

  toggleType(type: string): void {
    this.router.navigate([], {
      queryParams: { type },
      queryParamsHandling: 'merge', // Keep existing query parameters
    });
  }
}
