import { Component } from '@angular/core';
import { buttonMock } from './mocks/button-mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  mockData = buttonMock;
}
