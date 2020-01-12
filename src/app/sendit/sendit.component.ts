import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NONE_TYPE } from '@angular/compiler/src/output/output_ast';
import { empty } from 'rxjs';
// import undefined = require('firebase/empty-import');

import * as firebase from 'firebase/app';

import { GiveItService } from '../give-it.service';


@Component({
  selector: 'app-sendit',
  templateUrl: './sendit.component.html',
  styleUrls: ['./sendit.component.css']
})
export class SenditComponent implements OnInit {
  askprerequest = false;
  subtopics = ["select"]
  seletedsubTopic = ""
  color = 'primary';
  taskName = "";
  desc = "";
  seletedTopic = ""
  topics = this.getittopicsinload.getTopics();
  prerequests = [1];
  steps = [1];
  openCodeBaseValues = [];
  openCodeBaseValuesforPrerequest = [];
  stepsofcodeBase = [];
  codeForCodeBaseSteps = [];
  prerequestsofcodeBase = [];
  prerequestsCodeofcodeBase = [];

  constructor(private db: AngularFirestore ,public getittopicsinload:GiveItService) { }

  ngOnInit() {
  }

  subRequest() {
    if (this.prerequests.length <= 1) {
      alert("There  should be atleast one Prerequest")
    } else {
      this.prerequests.pop();
      console.log("i am working")
    }

  }
  addRequest() {
    var invalue = this.prerequests.length + 1;
    this.prerequests.push(invalue);
    console.log("i am working")

  }
  subStep() {
    if (this.steps.length <= 1) {

      alert("There  should be atleast one Step")
    } else {
      this.steps.pop();
      console.log("i am working")
    }
  }
  addStep() {
    var invalue = this.steps.length + 1;
    this.steps.push(invalue);
    console.log("i am working")

  }

  openCodeBaseForPrequest(value) {

    this.openCodeBaseValuesforPrerequest.push(value);

  }
  getSubTopic(){
    console.log("i am here ");
    if(this.seletedTopic.length >= 1){
      console.log(this.seletedTopic)
      this.db.collection('subTopic').doc(this.seletedTopic).get().subscribe(
        (doc)=>{
          console.log(doc.data().data)
          this.subtopics = doc.data().data
        }
      )
    }
    else{
      console.log("it is null")
    
    }



    
  }
  closeCodeBaseForPrerequest(values) {
    const index = this.openCodeBaseValuesforPrerequest.indexOf(values, 0);
    if (index > -1) {
      this.openCodeBaseValuesforPrerequest.splice(index, 1);
    }

    


  }
















  openCodeBaseForSteps(value) {
    console.log("i am working", value)
    this.openCodeBaseValues.push(value);
    console.log(this.openCodeBaseValues.includes(1));
  }
  closeCodeBaseForSteps(values) {
    const index = this.openCodeBaseValues.indexOf(values, 0);
    if (index > -1) {
      this.openCodeBaseValues.splice(index, 1);
    }

    console.log(this.openCodeBaseValues)

  }

  consoleitinlog() {
    // console.log(this.prerequests, this.steps, this.openCodeBaseValuesforPrerequest, this.openCodeBaseValues);

    // console.log(this.openCodeBaseValuesforPrerequest)

    // console.log(
    //   this.taskName,
    //   this.stepsofcodeBase ,
    // this.codeForCodeBaseSteps ,
    // this.prerequestsofcodeBase ,
    // this.prerequestsCodeofcodeBase ,
    // )
    
    // console.log(this.prerequestsofcodeBase,this.prerequestsCodeofcodeBase.length);
    for(var i = 0;i<this.prerequestsofcodeBase.length;i++){
      
      if(this.prerequestsCodeofcodeBase[i] == undefined){
        this.prerequestsCodeofcodeBase[i] = ""
        
      }else{
        console.log("noting to do")
      }
    }


    for (var i = 0 ;i < this.codeForCodeBaseSteps.length;i++){

      if(this.codeForCodeBaseSteps[i] == undefined){
        this.codeForCodeBaseSteps[i] = ""
        
      }else{
        console.log("noting to do")
      }
    }
    if (this.askprerequest == false) {
      this.db.collection(this.seletedTopic).add(
        {
          taskName: this.taskName,
          seletedTopic: this.seletedTopic,
          desc: this.desc,
          askprerequests: "No",
          steps: this.steps,
          openCodeBaseValues: this.openCodeBaseValues,
          stepsofcodeBase: this.stepsofcodeBase,
          codeForCodeBaseSteps: this.codeForCodeBaseSteps,






        }
      ).then((doc)=>{
        console.log(doc.id)

        this.db.collection(this.seletedTopic+"Array").doc(this.seletedsubTopic).update(          
          {
      value: firebase.firestore.FieldValue.arrayUnion(this.taskName+'@'+this.desc +'@'+doc.id +'@'+this.seletedsubTopic+'@' ),
      seleted:this.seletedTopic,
      subTopic: this.seletedsubTopic   
    
    }
       
  
        ).then(
          ()=>{
            this.taskName = ""
        this.seletedTopic  = ""
        this.desc = ""
        this.askprerequest = false
        this.prerequests = [1]
        this.steps = [1]
        this.prerequestsofcodeBase = []
        this.prerequestsCodeofcodeBase = []
        this.stepsofcodeBase = []
        this.codeForCodeBaseSteps = []
        alert("sucess");


          }
        ).catch(
          (err)=>{
            alert("some error is ther")
            console.log(err)
          }
        )
        
      }).catch(
        (err)=>{
          alert("some error is there")
          console.log(err)

        }
        
      )

    } else {
      this.db.collection(this.seletedTopic).add(
        {
          taskName: this.taskName,
          seletedTopic: this.seletedTopic,
          desc: this.desc,
          askprerequests: "yes",
          prerequests: this.prerequests,
          openCodeBaseValuesforPrerequest: this.openCodeBaseValuesforPrerequest,
          prerequestsofcodeBase: this.prerequestsofcodeBase,
          prerequestsCodeofcodeBase: this.prerequestsCodeofcodeBase,
          steps: this.steps,
          openCodeBaseValues: this.openCodeBaseValues,
          stepsofcodeBase: this.stepsofcodeBase,
          codeForCodeBaseSteps: this.codeForCodeBaseSteps,




        }
      ).then((doc)=>{
        console.log(doc.id)
          this.db.collection(this.seletedTopic+"Array").doc(this.seletedsubTopic).update(          
    {
value: firebase.firestore.FieldValue.arrayUnion(this.taskName+'@'+this.desc +'@'+doc.id +'@'+this.seletedsubTopic+'@'),
  
seleted:this.seletedTopic,
subTopic: this.seletedsubTopic
}
 
  
        ).then(
          ()=>{
            this.taskName = ""
        this.seletedTopic  = ""
        this.desc = ""
        this.askprerequest = false
        this.prerequests = [1]
        this.steps = [1]
        this.prerequestsofcodeBase = []
        this.prerequestsCodeofcodeBase = []
        this.stepsofcodeBase = []
        this.codeForCodeBaseSteps = []
        alert("sucess");


          }
        ).catch(
          (err)=>{
            alert("some error is ther")
            console.log(err)

          }
        )
        
      }).catch(
        (err)=>{
          alert("some error is there")
          console.log(err)
        }
        
      )

    }



  }
}
