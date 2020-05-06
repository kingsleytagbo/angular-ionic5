import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserData } from '../../providers/user-data';


@Component({
  selector: 'page-header',
  templateUrl: 'header.html',
  styleUrls: ['header.scss'],
})
export class Header implements OnInit{

  public loggedIn = false;

  constructor(public router: Router,
  public userData: UserData ) { }

  ngOnInit() {
    this.checkLoginStatus();
  }

  checkLoginStatus() {
    return this.userData.isLoggedIn().then(loggedIn => {
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
    this.userData.logout().then(() => {
      return this.router.navigateByUrl('/login');
    });
  }

}
