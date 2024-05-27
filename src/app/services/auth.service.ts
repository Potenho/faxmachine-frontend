import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { FormGroup } from '@angular/forms';
import { RegisterInterface } from '../requestForm/requestForm.interface';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  register(registerForm: RegisterInterface): Observable<any> {
    
    return this.http.post(environment.apiUrl, registerForm)
  }
}
