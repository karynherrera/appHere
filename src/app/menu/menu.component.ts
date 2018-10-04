import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import {HereMapComponent} from '../here-map/here-map.component';

declare var H: any;
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @ViewChild(HereMapComponent) map:HereMapComponent;
  public mapElement: ElementRef;
  

  constructor(private router: Router) { this.query="";}
  userClicks : Boolean = false;
  query : string;
  
  ngOnInit() {
  }

  stateBtn(event, name: string){
    console.log('hizo click '+name);
    //this.map.catchQuery(name);
    //this.router.navigate(['mapa']);
    }
}
