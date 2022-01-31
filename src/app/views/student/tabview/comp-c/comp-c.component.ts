import { Component, OnInit } from '@angular/core';
import {TabviewComponent} from "../tabview.component";

@Component({
  selector: 'app-comp-c',
  templateUrl: './comp-c.component.html',
  styleUrls: ['./comp-c.component.css']
})
export class CompCComponent implements OnInit {
  text;

  constructor(private tabcomp : TabviewComponent) { }

  ngOnInit(): void {
    this.text ="asfdas"
    this.tabcomp.compctext.asObservable().subscribe(x=>{
        this.text = x;
      }


    )

  }

}
