import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


import { AngulardialogueComponent } from '../angulardialogue/angulardialogue.component';

import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}
``


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


interface bringIt {
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
  selector: 'app-getit',
  templateUrl: './getit.component.html',
  styleUrls: ['./getit.component.css']
})
export class GetitComponent implements OnInit {

  angularCollections: AngularFirestoreDocument<Response_json>;  // fs
  angularCollection:any;
  displayData:bringIt[] = [];



  constructor(private afs: AngularFirestore,public dialog: MatDialog) {

    var count = 0; 
    this.angularCollections = this.afs.collection(
      'FirebaseArray'
    ).doc('data');
    this.angularCollection = this.angularCollections.get()
    console.log(
      this.angularCollection.subscribe(
        
        (doc)=>{
          
           
           
            console.log(doc.data())
            this.displayData = doc.data().value;
            // count = count +1;
           
     
       
       
       
        }
      )
    )
    console.log(this.displayData)
      
  }
  

  openDialog(
    sendItem
    // getAskprerequests,getprerequestsofcodeBase,getprerequestsCodeofcodeBase,getstepsofcodeBase,getcodeForCodeBaseSteps
    ) {
   
   console.log()
    this.dialog.open(AngulardialogueComponent, {
      data: {
        getItem:sendItem
        // sendaskprerequests: getAskprerequests,
        // sendprerequestsofcodeBase:getprerequestsofcodeBase,
        // sendprerequestsCodeofcodeBase:getprerequestsCodeofcodeBase,
        // sendstepsofcodeBase:getstepsofcodeBase,
        // sendcodeForCodeBaseSteps:getcodeForCodeBaseSteps

      },
      width:"100vh",
    });
  }

  ngOnInit() {
  }

}
