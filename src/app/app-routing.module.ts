import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProcessComponent } from './process/process.component';
import { SenditComponent } from './sendit/sendit.component';

import { HomeComponent } from './home/home.component';

import { EditorconfigComponent } from './editorconfig/editorconfig.component';


import { AngularComponent } from './angular/angular.component';
const routes: Routes = [
  {
    path:"process",
    component:ProcessComponent
  },
  {
    path:"angular",
    component:AngularComponent

  },
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"sendit",
    component: SenditComponent

  },
  {
    path:"editor",
    component:EditorconfigComponent
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
