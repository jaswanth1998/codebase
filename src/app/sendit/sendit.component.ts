import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';






@Component({
  selector: 'app-sendit',
  templateUrl: './sendit.component.html',
  styleUrls: ['./sendit.component.css']
})
export class SenditComponent implements OnInit {
  askprerequest = false;
  color = 'primary';
  taskName = "";
  desc = "";
  seletedTopic = ""
  topics = ["Basics", "Firebase","Netorking"]
  prerequests = [1];
  steps = [1];
  openCodeBaseValues = [];
  openCodeBaseValuesforPrerequest = [];
  stepsofcodeBase = [];
  codeForCodeBaseSteps = [];
  prerequestsofcodeBase = [];
  prerequestsCodeofcodeBase = [];

  constructor(private db: AngularFirestore) { }

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
    if (this.askprerequest == false) {
      this.db.collection("Angular").add(
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
      )

    } else {
      this.db.collection("Angular").add(
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
      )

    }



  }
}
