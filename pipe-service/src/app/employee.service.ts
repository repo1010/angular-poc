import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  constructor() { }

  getEmployee(){
    return [
      {'name':'Vishal Kumar', 'age':25, 'address':'Mumbai'},
      {'name':'Anand dev', 'age':45, 'address':'Bihar'},
      {'name':'Lakshman Prasad', 'age':30, 'address':'Jabalpur'},
      {'name':'Pankaj Raj', 'age':35, 'address':'Kolkata'}
    ];
  }
}
