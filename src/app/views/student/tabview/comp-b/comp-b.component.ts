import {Component, Input, OnInit} from '@angular/core';
import {TabviewComponent} from "../tabview.component";

@Component({
  selector: 'app-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.css']
})
export class CompBComponent implements OnInit {

  constructor(private tabComponent:TabviewComponent) { }

  @Input()
  myValue:string;

  ngOnInit(): void {

    // this.tabComponent.model.next("I have changed")
  }

}
