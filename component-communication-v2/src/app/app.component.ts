import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'component-communication-v2';

  number = 0;

  increment() {
    this.number++;
  }

  decrement() {
    this.number--;
  }
}
