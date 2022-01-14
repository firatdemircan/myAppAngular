import { Component, OnInit } from '@angular/core';
import {RequestService} from "../../shared/request.service";

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

      this.cities = this.cities.sort((a,b) => a.cityName.localeCompare(b.cityName))
      x = this.cities.reduce((a,x)=> a+x.id,0)
      console.log(x);
    });
  }

  remove(id) {
  console.log(id);
    this.cities.splice(this.cities.findIndex(item=>item.id == id),1);
  }
}
