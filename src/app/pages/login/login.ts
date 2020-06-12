import { Component, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserData } from '../../providers/user-data';
import { UserOptions } from '../../interfaces/user-options';
import { Store, ActionsSubject } from '@ngrx/store';
import { RootStoreState } from '../../state/root-store-state';
import * as AuthenticationActions from '../../state/authentication/authentication-action';
import { MenuController } from '@ionic/angular';

import { Authentication } from '../../models/authentication';
import { Subscription } from 'rxjs';
import { ofType } from "@ngrx/effects";
import { AlertController } from '@ionic/angular';

import { EventService } from '../../services/EventService';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls: ['login.scss'],
})
export class LoginPage {
  login: UserOptions = { username: '', password: '' };
  submitted = false;
  isValid = true;
  public loggedIn = false;
  loginSubscription = new Subscription();

  constructor(
    public userData: UserData,
    public router: Router,
    private store: Store<RootStoreState>,
    private loginActionsSubject: ActionsSubject,
    public alert: AlertController,
    public menu: MenuController
  ) {
    this.loginSubscription = this.loginActionsSubject.pipe(
      ofType<AuthenticationActions.GetFailureAction>(AuthenticationActions.ActionTypes.GET_FAILURE)
    ).subscribe(data => {
      console.log({ 'login failure changes': data });
      this.loggedIn = true;
      this.presentAlert();
    });
  }

  ngOnDestroy() {
    this.loginSubscription.unsubscribe();
  }

  ionViewWillEnter() {
    // disable the root left menu when entering this page
    this.menu.enable(false);
  }

  async presentAlert() {
    const alert = await this.alert.create({
      header: 'Login',
      subHeader: 'Error',
      message: 'Your username or password is incorrect!',
      buttons: ['OK']
    });

    await alert.present();
  }

  onLogin(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      const user = new Authentication(this.login.username, this.login.password);
      //this.userData.login(user);
      this.store.dispatch(new AuthenticationActions.GetRequestAction(user));
      //this.router.navigateByUrl('/crud');
    }
  }

  onSignup() {
    this.router.navigateByUrl('/signup');
  }
}
