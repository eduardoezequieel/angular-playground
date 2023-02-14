import { IBlockcodeComponent } from '../interfaces/IBlockcode';

export const buttonMock: IBlockcodeComponent = {
  html: `
  <div>
    <button>{{text}}</button>
  </div>
  `,
  css: `
  button{
    background-color: red;
  }
  `,
  typescript: `
  import { Component } from '@angular/core';

  @Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
  })
  export class ButtonComponent {
    text = 'Hello world'
  }
  `,
};
