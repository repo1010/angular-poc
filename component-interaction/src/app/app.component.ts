import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div style="text-align:center">
    <h1>
      Welcome to {{ title }}!
    </h1>
    
    <app-child (childEvent)="message = $event"  [parentdata]="name"></app-child>
    <h3>   Data from child to parent : {{message}}
    </h3>  
  </div>

  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'component-interaction';
  public name = 'Vishal Kumar';
  public message = '';
}
