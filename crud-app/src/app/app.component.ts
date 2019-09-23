import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  template: `
  
  <h3 *ngFor="let employee of employees">
    {{employee.name}} | {{employee.age}} | {{employee.address}}
  </h3>

  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'crud-app';
  public employees = [];
  public errorMsg ;

  constructor(private _empService: EmployeeService) { }

  ngOnInit() {
   this._empService.getEmployee().subscribe(data => this.employees = data);
  }

}
