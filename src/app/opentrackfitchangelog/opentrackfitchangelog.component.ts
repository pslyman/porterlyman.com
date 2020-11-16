import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opentrackfitchangelog',
  templateUrl: './opentrackfitchangelog.component.html',
  styleUrls: ['./opentrackfitchangelog.component.scss']
})
export class OpentrackfitchangelogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.location.href = 'http://www.products.porterlyman.com/OpenTrackFit/changelog';
  }

}
