import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'crud',
  templateUrl: './crud.page.html',
  styleUrls: ['./crud.page.scss'],
})
export class CrudPage implements OnInit {
  public state:any = [];

  constructor() { }

  ngOnInit() {
    this.getPageData();
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
        done: false,
        date: new Date()
      }, {
        id: '2',
        username: 'Jekyll Hyde',
        done: false,
        date: new Date()
      }, {
        id: '3',
        username: 'Storm Trooper',
        done: false,
        date: new Date()
      }, {
        id: '4',
        username: 'Lennox Lewis',
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

  onAddHandle(){
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
