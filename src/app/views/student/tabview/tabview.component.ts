import { Component, OnInit } from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";

@Component({
  selector: 'app-tabview',
  templateUrl: './tabview.component.html',
  styleUrls: ['./tabview.component.css']
})
export class TabviewComponent implements OnInit {

  index = 0;
  model = new Subject();
  myValueParent="aslkdfj";

  constructor() { }

  ngOnInit(): void {


  }

  get getModel(){
    return this.model.asObservable()
  }


  nextTab() {
    this.index = (this.index === 2) ? 0 : this.index + 1;
    this.model.next("NextTab");
  }


  prevTab() {
    this.index = (this.index === 0) ? 2 : this.index - 1;
    this.model.next("PrevTab");

  }
}
