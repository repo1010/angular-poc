import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
      {{title}}
    <h2> Welcome {{name}}</h2>

    
    <input [id]="myid" type="text" value="Vishal"/>
    <h3>Template reference only work with string type not with boolean etc. </h3>

   <h3> Input will  be disabled for disabled="false"
    <input disabled="isDisabled" id="{{myid}}" type="text" value="Vishal"/>
    </h3>

    <h3>
    Input will not be disabled for [disabled]="false"
    <input [disabled]="isDisabled" id="{{myid}}" type="text" value="Vishal"/>
    </h3>


  `,
  styleUrls: []
})
export class AppComponent {
  title = 'binding-app';
  public name = 'Vishal';
  public myid = 'testId';
  public isDisabled = false;
}
