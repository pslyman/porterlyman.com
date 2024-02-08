import { Routes } from '@angular/router';
import { JobsComponent } from './routes/jobs/jobs.component';

export const routes: Routes = [
  { path: '', redirectTo: 'job-history', pathMatch: 'full' },
  {
    path: 'job-history',
    component: JobsComponent,
  },
  { path: '**', redirectTo: 'job-history' },
];
