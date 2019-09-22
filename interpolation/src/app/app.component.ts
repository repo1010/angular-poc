import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div align="left">
         <h2> {{title}}</h2>
        
         Interpolation Test 

        <h3>SUM: </h3> {{2+2}} 
        <h3>String concatenation with variable value: </h3> {{"Welcome " +  name}} 
        <h3> String length : </h3>{{name.length}}
        <h3>Function call on String : </h3> {{name.toUpperCase()}}
        <h3>method call: </h3>  {{greetUser()}}

       <!--Binding Can't contain assignment-->
       <!--{{a= 2}}-->

       <!--{{window.location.href}}-->
       
       <h3> Access location href through property binding</h3> {{loc}}
  </div>        
  `,
  styleUrls: []
})
export class AppComponent {
  title = 'interpolation-app for implementing ineterpolation';
  public name = 'Vishal';
  public loc = window.location.href;

  greetUser(){
    return 'Hello ' + this.name;
  }
}
