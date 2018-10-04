import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HereMapComponent} from '../here-map/here-map.component';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  

  constructor(private router: Router, public map:HereMapComponent) { }
  userClicks : Boolean = false;

  ngOnInit() {
  }

  stateBtn(event, name: string){
    console.log('hizo click '+name);
    this.map.places(name);
    //this.router.navigate(['mapa']);
    }
}
