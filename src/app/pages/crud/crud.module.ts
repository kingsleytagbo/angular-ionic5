import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrudPageRoutingModule } from './crud-routing.module';

import { CrudPage } from './crud.page';
import { FooterModule } from '../../components/footer/footer.module';
import { HeaderModule } from '../../components/header/header.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrudPageRoutingModule,
    HeaderModule,
    FooterModule
  ],
  declarations: [CrudPage]
})
export class CrudPageModule {}
