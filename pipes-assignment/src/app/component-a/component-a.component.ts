import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.css']
})
export class ComponentAComponent implements OnInit {

  @Output() dateInputEvent = new EventEmitter();
  dateInput: Date;

  constructor() { }

  ngOnInit(): void {
  }

  onDateInput() {
    // console.log(this.dateInput);

    this.dateInputEvent.emit(this.dateInput);
  }

}
