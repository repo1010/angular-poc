import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  _url = 'http://localhost:3000/register';
  constructor(private http : HttpClient) {
    
   }

   submitForm(user){
    return this.http.post<any>(this._url, user).pipe(catchError(this.errorHandler));
   }

  errorHandler(error : HttpErrorResponse) {
    return  throwError(error);
  }
}
