import {FormControl, FormGroup, Validators} from "@angular/forms";

export class Forms {


}
export class SehirEkle extends FormGroup {
  constructor(def?) {
    super({
      id: new FormControl(def?.id),
      firstName: new FormControl('',
        Validators.compose([Validators.required, Validators.minLength(15),Validators.maxLength(80)])
      ),
      lastName: new FormControl(''),
      city: new FormControl('')
    });
  }
}
