import { Component, OnInit, ViewChild, ElementRef,Input } from '@angular/core';
import { Router } from '@angular/router';
import { HereMapComponent } from '../here-map/here-map.component';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @ViewChild(HereMapComponent) mapaHijo:HereMapComponent;
  
  constructor(private router: Router, private mapis: HereMapComponent) {}
  @Input() queryReceptor: string;
  
  ngOnInit() {
    
    //this.map.catchQuery('holi');
  }

  public stateBtn(event, name: string){
    console.log('hizo click '+name);
    console.log(this.queryReceptor);
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
