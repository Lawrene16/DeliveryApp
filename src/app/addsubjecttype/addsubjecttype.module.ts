import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddsubjecttypePage } from './addsubjecttype.page';

const routes: Routes = [
  {
    path: '',
    component: AddsubjecttypePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddsubjecttypePage]
})
export class AddsubjecttypePageModule {}
