import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { Subscription } from 'rxjs';
import { ofType } from "@ngrx/effects";
import { ActionsSubject } from '@ngrx/store';

import * as AuthenticationActions from '../../state/authentication/authentication-action';
import { UserData } from '../../providers/user-data';
import { EventService } from '../../services/EventService';


@Component({
  selector: 'page-header',
  templateUrl: 'header.html',
  styleUrls: ['header.scss'],
})
export class Header implements OnInit{

  public loggedIn = false;
  loginSubscription = new Subscription();
  eventSubscription = new Subscription();

  constructor(public router: Router,
  public userData: UserData,
  private loginActionsSubject: ActionsSubject,
  public alert: AlertController,
  private events: EventService ) { 
  }

  ngOnInit() {
    this.checkLoginStatus();
    this.loginSubscription = this.loginActionsSubject.pipe(
      ofType<AuthenticationActions.GetSuccessAction>(AuthenticationActions.ActionTypes.GET_SUCCESS)
    ).subscribe(data => {
      console.log({ 'login success changes': data });
      this.presentOKAlert('You are logged-in ...');
    });

    //optional event notifications 
    this.eventSubscription = this.events.event$.subscribe((item:any) => {
      console.log({item: item});
    });
  }

  ngOnDestroy() {
    this.loginSubscription.unsubscribe();
    this.eventSubscription.unsubscribe();
  }


  async presentOKAlert(message: string) {
    const alert = await this.alert.create({
      header: 'Login',
      subHeader: 'Success',
      message: message,
      buttons: ['OK']
    });
  }

  checkLoginStatus() {
    return this.userData.isLoggedIn().then(loggedIn => {
      console.log({loggedIn: loggedIn});
      return this.updateLoggedInStatus(loggedIn);
    });
  }

  updateLoggedInStatus(loggedIn: boolean) {
    setTimeout(() => {
      this.loggedIn = loggedIn;
    }, 300);
  }

  login(){
    this.router.navigateByUrl('/login');
  }

  logout (){
    this.userData.logout().then(loggedIn => {
      return this.router.navigateByUrl('/login');
    });
  }

}
