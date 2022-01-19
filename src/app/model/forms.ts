import {FormControl, FormGroup, Validators} from "@angular/forms";


export class SehirEkle extends FormGroup {
  constructor() {
    super({
      id: new FormControl(),
      firstName: new FormControl('',
        Validators.compose([Validators.required, Validators.minLength(15),Validators.maxLength(80)])
      ),
      lastName: new FormControl(''),
      city: new FormControl('')
    });
  }
}

export class UserForm extends FormGroup {
  constructor() {
    super({
      id: new FormControl(),
      userName: new FormControl('',
        Validators.compose([Validators.required, Validators.minLength(7),Validators.maxLength(80)])
      ),
      rol_id: new FormControl(''),
      branch_id: new FormControl('')
    });
  }
}
