import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-elements-app';

  @Input('state') 
  set state(state: string) {
      console.log('app1 received state', state);
  }

  @Output() message = new EventEmitter<any>();

  constructor() {
  	setTimeout(() => {
  		this.message.emit('After 5 seconds, something happened in app1');
  	}, 5000);
  }
}
