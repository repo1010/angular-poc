import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
      {{title}}
    <h2> Welcome {{name}}</h2>

  <h1>  ***********Property Binding**********</h1>
    <input [id]="myid" type="text" value="Vishal"/>
    <h3>Template reference only work with string type not with boolean etc. </h3>

   <h3> Input will  be disabled for disabled="false"
    <input disabled="isDisabled" id="{{myid}}" type="text" value="Vishal"/>
    </h3>

    <h3>
    Input will not be disabled for [disabled]="false"
    <input [disabled]="isDisabled" id="{{myid}}" type="text" value="Vishal"/>
    </h3>



    <h1>  ****Class Binding**********</h1>

<h2  class="text-special" [class]="successClass"> Class Binding example for success</h2>

<h2 [ngClass]="dangerClass"> Class Binding example for Failure</h2>

<h2 [class.text-special]="isSpecial"> Class Binding example for success</h2>

<h2 [ngClass]="messageClasses"> Multiple class implementation </h2>


<h1>***********Style Binding*********</h1>
  <h2 [style.color]= "hasError ? 'red' : 'orange' ">Style Binding example </h2>

  <h2 [style.color]= "highlightColor">Style Binding example -With Property Binding</h2>
  
  <h2 [ngStyle]= "titleStyles">Style Binding example -With multiple Style Properties </h2>
  

  
  `,
  styles: [`
    .text-success {
      color : blue;
    }

    .text-danger {
      color : red; 
    }

    .text-special{
      font-style: italic;
    }
  `]
})
export class AppComponent {
  title = 'binding-app';
  public name = 'Vishal';
  public myid = 'testId';
  public isDisabled = false;

  public successClass = 'text-success';
  public dangerClass = 'text-danger';
  public specialClass =  'text-special';
  public isSpecial = true;
  public hasError = false;

  public messageClasses = {
    "text-success" : !this.hasError,
    "text-danger" : this.hasError,
    "text-special" : this.isSpecial
  };

  public highlightColor = "orange";

  public titleStyles = {
    color : 'blue',
    fontStyle : 'italic'
  }
}
