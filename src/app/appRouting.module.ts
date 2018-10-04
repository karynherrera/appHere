import { NgModule, Component } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from '../app/menu/menu.component';
import {HereMapComponent} from '../app/here-map/here-map.component';

const app_routes: Routes=[
  {
    path: '', component: LoginComponent
  },
  {
      path: 'menu', component: MenuComponent
    },
    {
      path:'mapa', component: HereMapComponent
    },
{
    path: '**', pathMatch: 'full', redirectTo: ''
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(app_routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
 
}