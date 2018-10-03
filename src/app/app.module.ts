import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { environment } from '../environments/environment';

// importaciones firebase
import { AngularFireModule } from '@angular/fire';
import { HereMapComponent } from './here-map/here-map.component';
import { HereRoutingComponent } from './here-routing/here-routing.component';
import { HereMapApisComponent } from './here-map-apis/here-map-apis.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HereMapComponent,
    HereRoutingComponent,
    HereMapApisComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
