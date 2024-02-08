import { Routes } from '@angular/router';
import { JobsComponent } from './routes/jobs/jobs.component';
import { PortfolioComponent } from './routes/portfolio/portfolio.component';
import { ContactComponent } from './routes/contact/contact.component';

export const routes: Routes = [
  { path: '', redirectTo: 'job-history', pathMatch: 'full' },
  {
    path: 'job-history',
    component: JobsComponent,
  },
  {
    path: 'portfolio',
    component: PortfolioComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  { path: '**', redirectTo: 'job-history' },
];
