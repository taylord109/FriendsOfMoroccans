import { Component } from '@angular/core';

@Component({
  selector: 'fm-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'fm';
}
