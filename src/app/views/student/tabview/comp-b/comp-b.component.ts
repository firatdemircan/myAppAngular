import {Component, Input, OnInit} from '@angular/core';
import {TabviewComponent} from "../tabview.component";
import {FormControl, FormGroup} from "@angular/forms";
import {} from "rxjs"

@Component({
  selector: 'app-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.css']
})
export class CompBComponent implements OnInit {

  constructor(private tabComponent: TabviewComponent) {
  }

  someForm = new FormGroup({
    tcNoB: new FormControl(''),
  });


  @Input() myValue:string;

  ngOnInit(): void {
  console.log("kimim ben : " +this.myValue);
   // this.tabComponent.model.next("I have changed")
    this.tabComponent.model.asObservable().subscribe(x=>
      this.someForm.get("tcNoB").setValue(x)
    )
  }

  ngOnChanges(){
    if(this.myValue!= undefined){
      this.someForm.get("tcNoB").setValue(this.myValue)
    }
  }

  showMessage() {
    this.tabComponent.compctext.next("i am coming from B")
  }
}
