import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ModalTypes } from '../enums/modal-types';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  isVisible$ = new BehaviorSubject<boolean>(false)
  isLogin$ = new BehaviorSubject<boolean>(false)
  isRegister$ = new BehaviorSubject<boolean>(false)

  constructor() { }

  open(item: ModalTypes) {
    switch (item) {
      case ModalTypes.login:
        this.isLogin$.next(true)
        break
      case ModalTypes.register:
        this.isRegister$.next(true)
        break
    }
    this.isVisible$.next(true)
  }

  close() {
    this.isVisible$.next(false)
    this.isLogin$.next(false)
    this.isRegister$.next(false)
  }
}
