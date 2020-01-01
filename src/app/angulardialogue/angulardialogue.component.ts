import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogData } from '../angular/angular.component';

import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
interface Response_json {
  taskName: string,
  seletedTopic: string,
  desc: string,
  askprerequests: string,
  prerequests: string[],
  openCodeBaseValuesforPrerequest: number[],
  prerequestsofcodeBase: string[],
  prerequestsCodeofcodeBase: string[],
  steps: number[],
  openCodeBaseValues: number[],
  stepsofcodeBase: string[],
  codeForCodeBaseSteps: string[],
}
@Component({
  selector: 'app-angulardialogue',
  templateUrl: './angulardialogue.component.html',
  styleUrls: ['./angulardialogue.component.css']
})
export class AngulardialogueComponent implements OnInit {
  displayDataOnscreen :any;
  requestThing :any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dialogRef: MatDialogRef<AngulardialogueComponent>,
    @Inject(MAT_DIALOG_DATA)  public data: DialogData
    ,
    private db: AngularFirestore
    ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
    console.log(  this.data.getItem.split("@",3)[2])
    
    console.log(this.data.getId)
    this.db.collection(this.data.getId).doc(this.data.getItem.split("@",3)[2]).get().subscribe(
      (doc)=>{
        console.log(doc.data())
        this.displayDataOnscreen = doc.data()
        console.log(this.displayDataOnscreen)
      }
    )
  }

}
