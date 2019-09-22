import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
   
    <div style="text-align:center">
      <h1>
        Welcome to {{title.toUpperCase()}}!
      </h1>     

        <input type="text" value="{{replacedValue}}" />
       <h2> {{replacedValue}}</h2>

        <h2>***********Event Binding******</h2>
       <button (click)="greeting($event)" >Greet </button>
      {{greet}}

      <button (click)="greet = 'Vishal Kumar'" >Greet </button>

      <h2>***********Template Rerefence Variable********</h2>
      <input type= "text" #myInput/>
      <button (click)="onClick(myInput)">Click</button>
        {{tempRefValue}}
    


   <h2>************Two Way Binding**********</h2>
      <input type="text" [(ngModel)]="name" />

      {{name}}


   </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'event-binding';
  public replacedValue = 'Vishal';
  public greet = '';
  public tempRefValue = ''; 

  greeting(event){    
    console.log(event);
    this.greet = 'Welcome on Event bonding example';
  }

  onClick(input){
    console.log(input.type);
    this.tempRefValue = input.value;
  }
}
