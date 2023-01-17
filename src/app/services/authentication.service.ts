import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { ILoginUser } from '../models/login-user';
import { IRegisterUser } from '../models/register-user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private token = ''
  
  constructor(private httpClient: HttpClient) { }

  login(loginUser: ILoginUser): Observable<{token: string}> {
    return this.httpClient.post<{token: string}>('', loginUser)
      .pipe(
        tap(({token}) => {
          this.setToken(token)
          localStorage.setItem('token', 'Bearer ' + token)
          localStorage.setItem('login', loginUser.userName)
         })
      )
  }

  setToken(token: string) {
    this.token = token
  }

  getToken(): string {
    return this.token
  }

  isAuthorized(): boolean {
    return this.token.length == 0 ? false : true
  }

  logOut() {
    this.setToken('')
    localStorage.setItem('token', '')
    location.reload()
  }

  register(registerUser: IRegisterUser): Observable<string> {
    return this.httpClient.post<string>('', registerUser)
      .pipe(
        tap(mes => console.log(mes))
      )
  }
}
