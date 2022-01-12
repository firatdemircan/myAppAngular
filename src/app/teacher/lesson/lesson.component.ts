import { Component, OnInit } from '@angular/core';
import {BaserequestService} from "../../shared/baserequest.service";
import {RequestService} from "../../shared/request.service";

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit {

  constructor(private service : RequestService) { }

  ngOnInit(): void {

    this.service.getBy("city/getAll",'get').subscribe((x)=>{
      // @ts-ignore
      console.log(x.data)

    });

  }

}
