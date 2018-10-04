import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-sign-in-with-google',
  templateUrl: './sign-in-with-google.component.html',
  styleUrls: ['./sign-in-with-google.component.css']
})
export class SignInWithGoogleComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

  logout() {
    this.auth.signOut();
  }
}
