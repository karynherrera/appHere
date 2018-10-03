import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// importacion de componentes propios
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './approuting.module';
import { SignInWithFbComponent } from './login/sign-in-with-fb/sign-in-with-fb.component';
import { SignInWithGoogleComponent } from './login/sign-in-with-google/sign-in-with-google.component';
import { HereMapComponent } from './here-map/here-map.component';
import { HereRoutingComponent } from './here-routing/here-routing.component';
import { MenuComponent } from './menu/menu.component';

import { HereMapApisComponent } from './here-map-apis/here-map-apis.component';

// importaciones firebase
import { AngularFireModule } from '@angular/fire';

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
    MatToolbarModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
