import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
  
      <ul>
        <li (click) = "onSelect(dept)" *ngFor = "let dept of departments"> <span> {{dept.id}} {{dept.name}} </span>
        </li>
      </ul>
   
  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  public departments = [
    {"id" : 1, "name" : "Java"},
    {"id" : 2, "name" : "MongoDB"},
    {"id" : 3, "name" : "Spring"},
    {"id" : 4, "name" : "Angular"},
    {"id" : 5, "name" : "Microservice"}

  ];

  onSelect(dept){
    this.router.navigate(['/departments',dept.id,]);
  }
}
