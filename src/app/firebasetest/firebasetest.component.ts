import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-firebasetest',
  templateUrl: './firebasetest.component.html',
  styleUrls: ['./firebasetest.component.css']
})
export class FirebasetestComponent implements OnInit {

  constructor(private db:AngularFirestore) { }

  ngOnInit() {
    this.db.collection("testing").add(
      {
        value:"working"
      }
    )
  }

}
