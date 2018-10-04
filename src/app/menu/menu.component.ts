import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service'
import { AngularFireAuth} from '@angular/fire/auth';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {
  
 
  constructor(
    private router: Router,
    public auth: AuthService,
    public afAuth: AngularFireAuth
    ) { 


      };
  userClicks : Boolean = false;
    photo: string;
    name: string;

  ngOnInit() {
    this.afAuth.authState.subscribe(user => {
      if(user){
        this.name = user.displayName
        this.photo = user.photoURL

       
      }
    })
  }

  stateBtn(event, name: string){
    console.log('hizo click'+name);
    this.router.navigate(['mapa']);
    }
}
