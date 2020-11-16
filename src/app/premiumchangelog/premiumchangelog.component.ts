import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-premiumchangelog',
  templateUrl: './premiumchangelog.component.html',
  styleUrls: ['./premiumchangelog.component.scss']
})
export class PremiumchangelogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.location.href = 'http://www.products.porterlyman.com/PizzaDoughPremium/changelog';
  }

}
