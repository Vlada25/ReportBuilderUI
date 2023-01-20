import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private authService: AuthenticationService,
    private router: Router) {}

  ngOnInit(): void {
    const potentialToken = localStorage.getItem('token')

    if (potentialToken != null){
      this.authService.setToken(potentialToken)
      this.authService.getByLogin(localStorage.getItem('login') as string)
        .subscribe(() => {})
    }
  }
  
}
