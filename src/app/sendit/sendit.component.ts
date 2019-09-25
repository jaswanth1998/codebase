import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sendit',
  templateUrl: './sendit.component.html',
  styleUrls: ['./sendit.component.css']
})
export class SenditComponent implements OnInit {

  color = 'primary';
  prerequests = [1];
  steps = [1];
  openCodeBaseValues = [];
  openCodeBaseValuesforPrerequest = [];
  stepsofcodeBase = [];
  codeForCodeBaseSteps = [];
  prerequestsofcodeBase = [];
  prerequestsCodeofcodeBase = [];

  constructor() { }

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

    console.log(this.openCodeBaseValuesforPrerequest)

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
    console.log(this.prerequests, this.steps, this.openCodeBaseValuesforPrerequest, this.openCodeBaseValues);


    


  }
}
