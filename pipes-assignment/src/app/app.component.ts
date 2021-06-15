import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pipes-assignment';
  date: Date;

  constructor() { }
  ngOnInit() { }

  getInputDate($event: any) {
    this.date = $event;
  }
}
