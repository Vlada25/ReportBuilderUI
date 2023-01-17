import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  aSub: Subscription | undefined

  form = new FormGroup({
    login: new FormControl<string>('', [
      Validators.required
    ]),
    password: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(6)
    ])
  })

  constructor(
    private authService: AuthenticationService,
    private modalService: ModalService) { }

  get login() {
    return this.form.controls.login as FormControl
  }

  get password() {
    return this.form.controls.password as FormControl
  }

  ngOnDestroy(): void {
    if (this.aSub){
      this.aSub.unsubscribe
    }
  }

  submit() {
    this.aSub = this.authService.login({
      userName: this.form.value.login as string,
      password: this.form.value.password as string
    }).subscribe( () => {
      this.authService.getByLogin(this.form.value.login as string)
        .subscribe(() => {})
      this.modalService.close()
      alert("Вход выполнен!")
      location.reload()
    });
  }
}
