import { Component, OnInit } from '@angular/core';


import { AngulardialogueComponent } from '../angulardialogue/angulardialogue.component';

import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
  getItem:any;
  getId:any;
}


@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(AngulardialogueComponent, {
      data: {
        animal: 'panda'
      }
    });
  }
  ngOnInit() {
    
  }
  

}
