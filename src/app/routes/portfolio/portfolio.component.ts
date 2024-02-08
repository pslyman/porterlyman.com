import { Component } from '@angular/core';
import { portfolioList } from '../../constants/portfolio.constants';
import { CommonModule } from '@angular/common';
import { staggerAnimation } from '../../constants/animations.constants';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
  animations: [staggerAnimation],
})
export class PortfolioComponent {
  portfolioList = portfolioList;
}
