import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service'
import { AngularFireAuth} from '@angular/fire/auth';


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
  
 
  constructor(
    private router: Router,
    public auth: AuthService,
    public afAuth: AngularFireAuth
    ) { 
        this.query="";
      };
    userClicks : Boolean = false;
    photo: string;
    name: string;
    query : string;

  ngOnInit() {
    this.afAuth.authState.subscribe(user => {
      if(user){
        this.name = user.displayName
        this.photo = user.photoURL

       
      }
    })
  }

  stateBtn(event, name: string){
    console.log('hizo click '+name);
    //this.map.catchQuery(name);
    //this.router.navigate(['mapa']);
    }
}
