import { Component, OnInit } from '@angular/core';
import {RequestService} from "../../../service/request.service";
import {valueReferenceToExpression} from "@angular/compiler-cli/src/ngtsc/annotations/src/util";

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit {

  cities:object;

  constructor(private service : RequestService) { }

  ngOnInit(): void {
    let x:number;

    this.service.getBy("city/getAll",'get').subscribe((x)=>{
      console.log(x.data)
      this.cities = x.data



    });

    let y = this.f(25);

  }

  remove(id) {
  console.log(id);
    //remove any object within an array
    this.cities.splice(this.cities.findIndex(item=>item.id == id),1);


    }

    f(age, text?) {
    return (age > 180) ? true:"asdf"
  }


}
