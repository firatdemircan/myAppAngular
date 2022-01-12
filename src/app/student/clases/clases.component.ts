import { Component, OnInit } from '@angular/core';
import {BaserequestService} from "../../shared/baserequest.service";
import {RequestService} from "../../shared/request.service";

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
