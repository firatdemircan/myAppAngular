import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-csswork',
  templateUrl: './csswork.component.html',
  styleUrls: ['./csswork.component.css']
})
export class CssworkComponent implements OnInit {

  constructor() { }
  items:any[];

  ngOnInit(): void {

    this.items = [
      {
        label: 'Ana Sayfa',
        icon: 'fa fa-home',
        routerLink: ['anasayfa'],
      },
      { separator: true },
      {
        label: 'Veri Giriş',
        icon: 'fa fa-wrench',
        routerLink: ['verigiris'],
      },
      { separator: true },
      {
        label: 'Çıkış',
        icon: 'fa fa-fw fa-sign-out',
        routerLink: ['cikis'],
      },
    ];


  }

}
