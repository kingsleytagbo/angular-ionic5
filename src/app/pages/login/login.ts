import { Component, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserData } from '../../providers/user-data';
import { UserOptions } from '../../interfaces/user-options';
import { Store, ActionsSubject }  from '@ngrx/store';
import { RootStoreState } from '../../state/root-store-state';
import * as AuthenticationActions from '../../state/authentication/authentication-action';

import { Authentication } from '../../models/authentication';
import { log } from 'util';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls: ['./login.scss'],
})
export class LoginPage {
  login: Authentication = new Authentication('',  '' );
  submitted = false;

  constructor(
    public userData: UserData,
    public router: Router,
    private store: Store<RootStoreState>
  ) { }

  onLogin(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.store.dispatch(new AuthenticationActions.GetRequestAction(this.login));
      //this.userData.login(this.login);
      //this.router.navigateByUrl('/crud');
    }
  }

  onSignup() {
    this.router.navigateByUrl('/signup');
  }
}
