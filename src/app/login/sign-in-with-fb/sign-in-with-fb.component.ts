import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
//import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-in-with-fb',
  templateUrl: './sign-in-with-fb.component.html',
  styleUrls: ['./sign-in-with-fb.component.css']
})
export class SignInWithFbComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

  logout() {
    this.auth.signOut();
  }  
}
