import {Component, OnInit} from '@angular/core';
import {BaserequestService} from "../../../service/baserequest.service";
import {RequestService} from "../../../service/request.service";
import {FormGroup} from "@angular/forms";
import {UserForm} from "../../../model/forms";

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.css']
})
export class ClasesComponent implements OnInit {

  users: any[];
  display: boolean = false;
  userForm: UserForm;
  branch: any[];
  roles: any[];
  save: boolean = false;
  update: boolean  = false;

  constructor(private service: RequestService) {
  }

  ngOnInit(): void {

    this.userForm = new UserForm();

    this.service.getBy("branch/getAll", "get").subscribe(x => {
      this.branch = x.data
    })

    this.roles = [
      {
        id: 0,
        name: "Admin"
      },
      {
        id: 1,
        name: "User"
      }
    ]


    this.service.getBy("user/getAll", "get").subscribe(x => {
        console.log(x.data)
        this.users = x.data
      }
    )

  }

  kisiEkle() {
    this.userForm.reset();
    this.display = true,
      this.save = true
    this.update = false;
  }

  updatePanel(user) {

    this.display = true
    this.save = false
    this.update = true;

    console.log(user)
    this.userForm.patchValue({
      userName: user.userName,
      id : user.id,
      rol_id : user.eRole,
      branch_id : user.branch.id
    })



  }

  saveUser() {
    console.log(this.userForm.value)
    this.service.login("user/savee","post",this.userForm.value).subscribe(x=>
    {
      if(x.result =="success"){
        this.users.push(x.data)
      }
    })


  }

  updateUser() {

    this.service.login("user/savee","post",this.userForm.value).subscribe(x=>
    {
      if(x.result =="success"){
        this.users.splice(this.users.findIndex(item=>item.id == this.userForm.value.id),1);
        this.users.push({
          userName : x.data.userName,
          id : x.data.id,
          eRole : x.data.erole,
          branch : x.data.branch
        });
        this.display = false;

      }
    })
  }
}
