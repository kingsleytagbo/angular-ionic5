import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { LoginPage } from './login';
import { LoginPageRoutingModule } from './login-routing.module';
import { FooterModule } from '../../components/footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    FooterModule
  ],
  declarations: [
    LoginPage,
  ]
})
export class LoginModule { }
