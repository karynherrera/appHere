import { Component, OnInit, ViewChild, ElementRef,Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service'
import { AngularFireAuth} from '@angular/fire/auth';


import {HereMapComponent} from '../here-map/here-map.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {
  @ViewChild(HereMapComponent) mapaHijo:HereMapComponent;
  
 
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

  public stateBtn(event, name: string){
    console.log('hizo click '+name);
    // console.log(this.queryReceptor);
    //this.map.catchQuery(name);
    //this.map.catchQuery(name);
    //this.router.navigate(['mapa']);
    }

  catchQuery(value:string){
    this.mapaHijo.catchQuery(value);
    //this.mapaHijo.places(value);
    //this.router.navigate(['mapa']);
  }
}
