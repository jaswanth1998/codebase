import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {MatDialogModule} from '@angular/material/dialog';
import { AngularComponent } from './angular/angular.component';
import { AngulardialogueComponent } from './angulardialogue/angulardialogue.component';

import { FormsModule } from '@angular/forms';
import { ProcessComponent } from './process/process.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatInputModule} from '@angular/material/input';
import { SenditComponent } from './sendit/sendit.component';

import {MatSlideToggleModule} from '@angular/material/slide-toggle';


import {MatCheckboxModule} from '@angular/material/checkbox';

import {MatButtonModule} from '@angular/material/button';
import { EditorconfigComponent } from './editorconfig/editorconfig.component';
import { HomeComponent } from './home/home.component';

// import {QuillInitializeService} from "./quill-initialize.service";

import { QuillModule } from 'ngx-quill'

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AngularComponent,
    AngulardialogueComponent,
    ProcessComponent,
    SenditComponent,
    EditorconfigComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule ,
    NgbModule,
    MatInputModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatButtonModule,
    QuillModule.forRoot(),
    ReactiveFormsModule

  ],
  entryComponents: [
    AngulardialogueComponent
  
],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
