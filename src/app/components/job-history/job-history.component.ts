import { Component, Input } from '@angular/core';
import { JobHistory } from '../../interfaces/resume.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'job-history-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './job-history.component.html',
  styleUrl: './job-history.component.scss'
})
export class JobHistoryComponent {
  @Input({ required: true }) job: JobHistory = {
    id: 0,
    title: '',
    location: '',
    dateRange: '',
    description: ''
  }; 
}
