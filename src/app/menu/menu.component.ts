import { Component, OnInit } from '@angular/core';
import { IMenu } from '../dataInterfaceMenu';
import { menu } from '../dataMenu';


@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
menu: IMenu[] = menu;
  constructor() {}


  ngOnInit(): void {
  }

}
