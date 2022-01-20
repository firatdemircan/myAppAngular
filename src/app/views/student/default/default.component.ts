import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {
  items: any;

  constructor() { }

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
