import { Component, OnInit } from '@angular/core';
import {RequestService} from "../../../service/request.service";
import {City} from "../../../model/city";
import {FormBuilder} from "@angular/forms";
import { SehirEkle} from "../../../model/forms";

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit {

  cities:City[];
  id :number = null
  personForm : SehirEkle
  display: boolean = false;



  constructor(private service : RequestService,private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.personForm = new SehirEkle();

    this.service.getBy("city/getAll",'get').subscribe((x)=>{
      console.log(x.data)
      this.cities = x.data


    });
    let y = this.f(25);

  }

  remove(cityy) {

    let x:number;

    console.log(cityy);

    //remove any object within an array
    //this.cities.splice(this.cities.findIndex(item=>item.id == id),1);

    //sort objects in array
    //this.cities = this.cities.sort((a,b) => a.cityName.localeCompare(b.cityName))

    //sum the object any property in array
    //x = this.cities.reduce((a,x)=> a+x.id,0)
    //console.log(x);

    //finding object in  an array
    //let city = this.cities.find(item => item.id == 5);
    //console.log(city)

    //finding the index of the element
    //console.log(this.cities.indexOf(city));



    //find array with specific condition
    this.cities = this.cities.filter(item => item.id<14)


    }

    f(age, text?) {
    return (age > 180) ? true:"asdf"
  }


  deneme() {
    console.log(this.personForm.value)
    this.display = false;

  }


  submitForm() {
    console.log(this.personForm.value)
    this.display = false;
  }

  popUpAc() {
    this.display = true;
  }

  updatePanel(city: any) {
    let cityy = {
      city : city.id,
      firstName : city.cityName,
      lastName : city.branch.branchName,
      id : city.id

    }
    this.personForm.setValue(cityy)

    this.display = true;

  }
}
