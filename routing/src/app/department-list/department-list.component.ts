import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
  
      <ul>
        <li (click) = "onSelect(dept)" *ngFor = "let dept of departments" [class.selected]="isSelected(dept)"> <span> {{dept.id}} {{dept.name}} </span>
        </li>
      </ul>
   
  `,
  styles: [
    `
    .ul li.selected {
      color : white;
      background-color : #CFDBDC;
    }
    `
  ]
})
export class DepartmentListComponent implements OnInit {

  public selectedId;
  constructor(private router : Router, private route : ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params : ParamMap) => {
        let id  = parseInt(params.get('id'));
        this.selectedId = id;
    })
  }

  public departments = [
    {"id" : 1, "name" : "Java"},
    {"id" : 2, "name" : "MongoDB"},
    {"id" : 3, "name" : "Spring"},
    {"id" : 4, "name" : "Angular"},
    {"id" : 5, "name" : "Microservice"}

  ];

  onSelect(dept){
    //this.router.navigate(['/departments',dept.id,]);
    this.router.navigate([dept.id],{relativeTo: this.route});
  }

  isSelected(dept){
    return dept.id === this.selectedId;
  }
}
