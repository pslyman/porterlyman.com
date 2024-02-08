import { Component } from '@angular/core';
import { contactInfo } from '../../constants/contact.constants';
import { CommonModule } from '@angular/common';
import { staggerAnimation } from '../../constants/animations.constants';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  animations: [staggerAnimation],
})
export class ContactComponent {
  contactInfo = contactInfo;
}
