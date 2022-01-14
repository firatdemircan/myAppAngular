import { Component, OnInit } from '@angular/core';
import {BaserequestService} from "../../../service/baserequest.service";
import {RequestService} from "../../../service/request.service";

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.css']
})
export class ClasesComponent implements OnInit {

  constructor(private service : RequestService) { }

  ngOnInit(): void {

    this.service.getBy("","")

  }

}
