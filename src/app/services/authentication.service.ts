import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { ILoginUser } from '../models/login-user';
import { IUser } from '../models/user';
import { IRegisterUser } from '../models/register-user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private token = ''
  public currentUser: IUser | undefined
  
  constructor(private httpClient: HttpClient) { }

  login(loginUser: ILoginUser): Observable<{token: string}> {
    return this.httpClient.post<{token: string}>('https://localhost:7200/api/account/login', loginUser)
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
    return this.httpClient.post<string>('https://localhost:7200/api/account/registration', registerUser)
      .pipe(
        tap(mes => console.log(mes))
      )
  }

  getByLogin(login: string): Observable<IUser> {
    return this.httpClient.get<IUser>('https://localhost:7200/api/users/' + login)
      .pipe(
        tap(u => {
          this.currentUser = u
        })
      )
  }
}
