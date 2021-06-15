import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.css']
})
export class LabelComponent implements OnInit, OnChanges {
  @Input() number: number;
  message = '';

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    if (this.number % 2 === 0) {
      this.message = 'This is an Even number';
    } else {
      this.message = 'This is not an Even number';
    }
  }

}
