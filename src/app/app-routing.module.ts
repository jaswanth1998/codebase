import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProcessComponent } from './process/process.component';
import { SenditComponent } from './sendit/sendit.component';


import { EditorconfigComponent } from './editorconfig/editorconfig.component';
const routes: Routes = [
  {
    path:"process",
    component:ProcessComponent
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
