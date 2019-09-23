import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEmployee } from './employee';



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

public _url = '/assets/data/employee.json';
  constructor(private _http: HttpClient) { }

  getEmployee() : Observable<IEmployee[]>{
    return this._http.get<IEmployee[]>(this._url);
  }

}
