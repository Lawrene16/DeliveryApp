import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SubjecttypedetailsPage } from './subjecttypedetails.page';

const routes: Routes = [
  {
    path: '',
    component: SubjecttypedetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SubjecttypedetailsPage]
})
export class SubjecttypedetailsPageModule {}
