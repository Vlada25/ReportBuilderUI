import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { LabsTemplateService } from 'src/app/services/labs-template.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  constructor (
    private authService: AuthenticationService,
    private labsTemplateService: LabsTemplateService,
    private router: Router) {}

  start() {
    if (this.authService.isAuthorized()){
      this.router.navigate(['chooseLab/'])
    }
    else {
      alert("Необходимо авторизоваться!")
    }
  }
}
