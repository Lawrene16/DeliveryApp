import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'subjecttypedetails', loadChildren: './subjecttypedetails/subjecttypedetails.module#SubjecttypedetailsPageModule' },
  { path: 'addcategory', loadChildren: './addcategory/addcategory.module#AddcategoryPageModule' },
  { path: 'addsubjecttype', loadChildren: './addsubjecttype/addsubjecttype.module#AddsubjecttypePageModule' },
  { path: 'listsubjecttypes', loadChildren: './listsubjecttypes/listsubjecttypes.module#ListsubjecttypesPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
