import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-freechangelog',
  templateUrl: './freechangelog.component.html',
  styleUrls: ['./freechangelog.component.scss']
})
export class FreechangelogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.location.href = 'http://www.products.porterlyman.com/PizzaDoughCalculator/changelog';
  }

}
