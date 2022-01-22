import { Component, OnInit } from '@angular/core';
import {UserForm} from "../../../model/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userForm: UserForm;
  branch: any[];
  roles: any[];

  constructor() { }

  ngOnInit(): void {
    this.userForm = new UserForm();

    this.branch = [
      {id: 1, branchName: "Trabzon"},
      {id: 2, branchName: "Diyarbakır"},
      {id: 3, branchName: "Mardin"},
    ]

    this.roles =[
      {id:1,name :"admin"},
      {id :2,name: "tasra"}
    ]
  }



  saveUser() {

  }

  updateUser() {

  }
}
