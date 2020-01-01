import { Component, OnInit } from '@angular/core';
import { GiveItService } from '../give-it.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  topics;

  constructor(public showIt :GiveItService) { }

  ngOnInit() {
    this.topics=this.showIt.getTopics();
  }

}
