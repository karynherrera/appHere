import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
declare var H: any;
@Component({
  selector: 'app-here-map',
  templateUrl: './here-map.component.html',
  styleUrls: ['./here-map.component.css']
})
export class HereMapComponent  implements OnInit {

  private platform: any;

  @ViewChild('map')
  public mapElement: ElementRef;

  public constructor() {
      this.platform = new H.service.Platform({
        'app_id': 'eknmdJGbgJ5Rx6BQXKPv',
        'app_code': 'zngzizlNjZOy3FMap46xzw'
      });
  }

  public ngOnInit() { }

  // tslint:disable-next-line:use-life-cycle-interface
  public ngAfterViewInit() {
      const defaultLayers = this.platform.createDefaultLayers();
      const map = new H.Map(
          this.mapElement.nativeElement,
          defaultLayers.normal.map,
          {
              zoom: 14,
              center: { lat: -33.43727, lng: -70.65056 } // Aquí estamos en stgo Centro Plza de Armas
          }
      );
  }
}
/*
'app_id': 'eknmdJGbgJ5Rx6BQXKPv',
'app_code': 'zngzizlNjZOy3FMap46xzw'
*/
