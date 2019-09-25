import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-details',
  template: `

      You selected department with id {{departmentid}} 

      <p>
      <button (click)="showOverview()">Overview </button>
      <button (click)="showContact()">Contact </button>
      </p>

      <router-outlet></router-outlet>

      <p>
      <button (click)="goPrevious()">Previous</button>
      <button (click)="goNext()">Next</button>
      </p>

      <button (click)="goBack()"> Back</button>
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
    //this.router.navigate(['/departments',previousid]);
   this.router.navigate(['../',previousid],{relativeTo: this.route});
  }

  goNext(){
    let nextid = this.departmentid + 1;
    //this.departmentid =  nextid;
   // this.router.navigate(['/departments',nextid]);
    this.router.navigate(['../',nextid],{relativeTo: this.route});
  }

  goBack(){
   // this.router.navigate(['/departments', {id:this.departmentid, test:'testparam'}]);
    this.router.navigate(['../'],{relativeTo : this.route});
  }

  showOverview(){
    this.router.navigate(['overview'],{relativeTo : this.route});
  }

  showContact(){
    this.router.navigate(['contact'],{relativeTo : this.route});
  }
}
