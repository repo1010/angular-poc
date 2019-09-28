import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  _url = 'http://localhost:3000/register';
  constructor(private http : HttpClient) {
    
   }

   submitForm(user){
    return this.http.post<any>(this._url, user);
   }
}
