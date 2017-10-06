import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <p>asd
      app Works! {{title}}
      Hello my name is Fabian we get no errors :D
    </p>
  `,
  styles: []
})
export class AppComponent {
  title = 'app';
}
