import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular 6';
  dsCountry: any[] = [
    {
      text: 'USA',
    },
    {
      text: 'Russia',
    },
    {
      text: 'France',
    },
    {
      text: 'Germany',
    },
  ];
}
