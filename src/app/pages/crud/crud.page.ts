import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MenuController, IonSlides } from '@ionic/angular';
import { Router } from '@angular/router';
import { UserData } from '../../providers/user-data';

@Component({
  selector: 'page-crud',
  templateUrl: 'crud.page.html',
  styleUrls: ['crud.page.scss'],
})
export class CrudPage implements OnInit {
  public state:any = [];
  public loggedIn = false;

  constructor(
    public menu: MenuController,
    private userData: UserData,
    private router: Router,
  ) { }


  ionViewWillEnter() {
    // disable the root left menu when entering the crud page
    this.menu.enable(false);
  }

  ionViewDidLeave() {
    // disable the root left menu when leaving the crud page
    this.menu.enable(false);
  }

  ngOnInit() {
    this.getPageData();
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

  listenForLoginEvents() {
    window.addEventListener('user:login', () => {
      this.updateLoggedInStatus(true);
    });
  }

  getPageData(){
    this.state = {
      edit: false,
      delete: false,
      add: false,
      item: {id: '',
      username: ''
      },
      formData: [{
        id: '1',
        username: 'Johhny Rocket',
        emailaddress: "",
        done: false,
        date: new Date()
      }, {
        id: '2',
        username: 'Jekyll Hyde',
        emailaddress: "",
        done: false,
        date: new Date()
      }, {
        id: '3',
        username: 'Storm Trooper',
        emailaddress: "",
        done: false,
        date: new Date()
      }, {
        id: '4',
        username: 'Lennox Lewis',
        emailaddress: "",
        done: false,
        date: new Date()
      }]
    };
  }

  onEditHandle(item){
    this.state.item = item;
    this.state.edit = true;
  }

  onDeleteHandle(item){
    this.state.delete = true;
    for(let i = 0; i < this.state.formData.length; i++){
      if(item.id === this.state.formData[i].id){
        const sliced = this.state.formData.splice(i, 1);
        break;
      }
    }
  }

  onAddHandle(form:any){
    this.state.item = {id: '', username: ''};
    this.state.add = true;
  }

  onCancelHandle(form: NgForm){
    //this.state.item = {id: '', username: ''};
    this.state.edit = false;
    this.state.delete = false;
    this.state.add = false;
  }

  onSubmitHandle(form: NgForm) {
    if (form.valid) {
      if (this.state.item && this.state.item.id.length > 0) {
      }
      else{
        this.state.formData.push(
          {id: String((this.state.formData.length + 1)), username: this.state.item.username}
        );
      }
      this.onCancelHandle(form);
    }
  }

}
