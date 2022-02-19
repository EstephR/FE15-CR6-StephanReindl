import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IMenu } from '../dataInterfaceMenu';
import { menu } from '../dataMenu';




@Component({
  selector: 'menu-details',
  templateUrl: './menu-details.component.html',
  styleUrls: ['./menu-details.component.scss']
})
export class MenuDetailsComponent implements OnInit {
  menuDetail: IMenu = {} as IMenu;
  id: number = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
     this.id = +params['productId'];
     this.menuDetail = menu[this.id];
   });
  }
 }
