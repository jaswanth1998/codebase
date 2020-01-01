import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GiveItService {
  topics = ["Basics", "Firebase","Networking","Python"]

  constructor() { }
  getTopics(){
    return this.topics;
  }
}
