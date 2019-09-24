import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-details',
  template: `
      You selected department with id {{departmentid}} <br>
      <button (click)="goPrevious()">Previous</button>
      <button (click)="goNext()">Next</button>
  `,
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnInit {

  public departmentid;
  previousid: number;
  nextid: number;
  constructor(private route: ActivatedRoute, private router : Router) { }

  ngOnInit() {
  // this.departmentid = this.route.snapshot.paramMap.get('id');
    this.route.paramMap.subscribe((params : ParamMap) => {
    let id = parseInt(params.get('id'));
    this.departmentid = id;
  }); 
  }

  goPrevious(){
    let previousid = this.departmentid - 1;
   // this.departmentid = previousid;
    this.router.navigate(['/departments',previousid]);
  }

  goNext(){
    let nextid = this.departmentid + 1;
    //this.departmentid =  nextid;
    this.router.navigate(['/departments',nextid]);
  }
}
