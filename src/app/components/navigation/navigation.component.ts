import { Component } from '@angular/core';
import { ModalTypes } from 'src/app/enums/modal-types';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  login = ModalTypes.login
  register = ModalTypes.register
  
  constructor (
    public authService: AuthenticationService,
    public modalService: ModalService) { }
    
}
