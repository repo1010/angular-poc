import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center">
      <h1>
        Welcome to {{title}}!
      </h1>
      
      <h2>***************Pipe implementation***********</h2>
      <h3>{{code | lowercase}}</h3>
      <h3>{{code | uppercase}}</h3>
      <h3>{{code | slice : 4}}</h3>
      <h3>{{code | slice : 4 : 8}}</h3>
      <h3>{{employee |  json}}</h3>


      <h3>{{num | number : '1.2-3'}}</h3>
      <h3>{{num | number : '1.7-9'}}</h3>
      <h3>{{num | number : '3.2-3'}}</h3>

      <h3>{{date}}</h3>
      <h3>{{date | date : 'short'}}</h3>
      <h3>{{date | date : 'shortDate'}}</h3>  // On witing shortDate as shortdate , we get invalid value but no compile error
      <h3>{{date | date : 'shortTime'}}</h3>

      <h3>{{currency | currency }}</h3> 
      <h3>{{currency | currency : 'GBP'}}</h3>   //GBP is case sensitive
      <h3>{{currency | currency : 'GBP' : 'code'}}</h3>  //code is case sensitive

      <h3>{{.454 | percent}} </h3> //round up to 45
      <h3>{{.458 | percent}} </h3> //round up to 46
      <h3>{{12.459 | percent}} </h3> //round up to 1246


      <h2>************Service Implementation************</h2>
        <h3 *ngFor = "let employee of employees">
            {{employee.name}} {{employee.age}} {{employee.address}}
        </h3>
    </div>
    
    
  `,
  styles: []
})
export class AppComponent implements OnInit {

  title = 'pipe-service';

  public code = 'PipeImplementation';
  public message = 'Implementation looking good';
  public num = '5.87678';
  public employee = {
    'name': 'Vishal Kumar',
    "address": "Mumbai",
    "technology": "Java"
  }
  public date = new Date();
  public currency = '560';
  public employees = [];

  constructor(private _empService: EmployeeService) { }

  ngOnInit() {
    this.employees = this._empService.getEmployee();
  }
}
