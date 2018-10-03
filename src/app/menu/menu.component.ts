import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }
  userClicks : Boolean = false;

  ngOnInit() {
  }

  stateBtn(event){
    console.log('hizo click');
    }
}
