import { Component, OnInit } from '@angular/core';
import {TabviewComponent} from "../tabview.component";
import {CompBComponent} from "../comp-b/comp-b.component";

@Component({
  selector: 'app-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.css']
})
export class CompAComponent implements OnInit {

  index: number = 0;
  constructor(private tabviewComponent:TabviewComponent) {

     tabviewComponent.getModel.subscribe(x=>{
       console.log("A component")
       console.log(x)
     })

  }

  ngOnInit(): void {

    console.log(this.tabviewComponent.model)
    this.tabviewComponent.model.next("A component gave value")
  }

}
