import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { JobsComponent } from './routes/jobs/jobs.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JobsComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  
}
