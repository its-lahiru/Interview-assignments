import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  @Output() increment = new EventEmitter();
  @Output() decrement = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onIncrementClick() {
    this.increment.emit();
  }
  onDecrementClick() {
    this.decrement.emit();
  }

}
