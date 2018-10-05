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
  
  value: string;
  
  constructor(
    private router: Router,
    public auth: AuthService,
    public afAuth: AngularFireAuth
    ) { 
        this.query="";
      };

    stateMenu: Boolean = false;
    stateMap: Boolean = false;
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

  public stateBtn(value: string){
    //console.log('hizo click '+name);
    //this.mapaHijo.catchQuery(value);
    // console.log(this.queryReceptor);
    //this.map.catchQuery(name);
    //this.map.catchQuery(name);
    //this.router.navigate(['mapa']);
    }

  directorio(evento,value:string){
    this.stateMenu = true;
    this.stateMap = true;
    //console.log(this.value);
    //this.stateBtn(value);
    //this.mapaHijo.userQuery = value;
    //console.log('value directorio '+this.mapaHijo.userQuery);
    this.mapaHijo.catchQuery(value);
    //this.mapaHijo.places(value);
    //this.router.navigate(['mapa']);
  }
}
