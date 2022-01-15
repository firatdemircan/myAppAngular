import { Component, OnInit } from '@angular/core';
import {RequestService} from "../../../service/request.service";
import {valueReferenceToExpression} from "@angular/compiler-cli/src/ngtsc/annotations/src/util";

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit {

  cities:any[];

  constructor(private service : RequestService) { }

  ngOnInit(): void {
    let x:number;

    this.service.getBy("city/getAll",'get').subscribe((x)=>{
      console.log(x.data)
      this.cities = x.data


      //sort objects in array
      this.cities = this.cities.sort((a,b) => a.cityName.localeCompare(b.cityName))

      //sum the object any property in array
      x = this.cities.reduce((a,x)=> a+x.id,0)
      console.log(x);

      //finding object in  an array
      let city = this.cities.find(item => item.id == 5);
      console.log(city)

      //finding the index of the element
      console.log(this.cities.indexOf(city));



      //find array with specific condition
      this.cities = this.cities.filter(item => item.id<14)

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
