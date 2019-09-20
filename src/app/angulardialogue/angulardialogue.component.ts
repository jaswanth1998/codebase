import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogData } from '../angular/angular.component';


@Component({
  selector: 'app-angulardialogue',
  templateUrl: './angulardialogue.component.html',
  styleUrls: ['./angulardialogue.component.css']
})
export class AngulardialogueComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AngulardialogueComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
  }

}
