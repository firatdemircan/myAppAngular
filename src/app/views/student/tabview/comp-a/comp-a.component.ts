import {Component, Input, OnInit, Output} from '@angular/core';
import {TabviewComponent} from "../tabview.component";
import { EventEmitter } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.css']
})
export class CompAComponent implements OnInit {

  index: number = 0;
  profileForm = new FormGroup({
    tcNo: new FormControl(''),
  });

  @Output() greetEvent = new EventEmitter();
  passParent() {
   //console.log(this.profileForm.get("tcNo").value)
    this.greetEvent.emit(this.profileForm.get("tcNo").value);
  }

  @Input() loggedIn:string;

  constructor(private tabviewComponent:TabviewComponent) {
  }

  ngOnInit(): void {
    console.log(this.loggedIn)
  }


  changeModel() {
    this.tabviewComponent.model.next("A component Değeri")
  }
}
