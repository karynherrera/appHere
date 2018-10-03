import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// importacion de componentes propios
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './appRouting.module';

// importaciones firebase
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreModule} from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
//import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from './Services/auth.service';

import { SignInWithFbComponent } from './login/sign-in-with-fb/sign-in-with-fb.component';
import { SignInWithGoogleComponent } from './login/sign-in-with-google/sign-in-with-google.component';

import { HereMapComponent } from './here-map/here-map.component';
import { HereRoutingComponent } from './here-routing/here-routing.component';

import { MenuComponent } from './menu/menu.component';

import { HereMapApisComponent } from './here-map-apis/here-map-apis.component';


// importaciones material angular
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignInWithFbComponent,
    SignInWithGoogleComponent,
    HereMapComponent,
    HereRoutingComponent,
    MenuComponent,
    HereMapApisComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    AngularFireAuthModule,
    MatToolbarModule,
    AppRoutingModule
  ],
  providers: [AuthService,  AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
