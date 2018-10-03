import { Component, OnInit, OnChanges, SimpleChanges, ViewChild, ElementRef, Input } from '@angular/core';

declare var H: any;

@Component({
  selector: 'app-here-routing',
  templateUrl: './here-routing.component.html',
  styleUrls: ['./here-routing.component.css']
})
export class HereRoutingComponent implements OnInit, OnChanges {

    @ViewChild('map')
    public mapElement: ElementRef;

    @Input()
    public appId: any;

    @Input()
    public appCode: any;

    @Input()
    public start: any;

    @Input()
    public finish: any;

    @Input()
    public width: any;

    @Input()
    public height: any;

    public directions: any;

    private platform: any;
    private map: any;
    private router: any;

    public constructor() { }

    public ngOnInit() {
      this.platform = new H.service.Platform({
          'app_id': this.appId,
          'app_code': this.appCode
      });
      this.directions = [];
      this.router = this.platform.getRoutingService();
  }

    // tslint:disable-next-line:use-life-cycle-interface
    public ngAfterViewInit() { // start y finishserán los datos que estén vinculados a los atributos del componente
      // tslint:disable-next-line:prefer-const
      let defaultLayers = this.platform.createDefaultLayers();
      this.map = new H.Map(
          this.mapElement.nativeElement,
          defaultLayers.normal.map,
          {
              zoom: 4,
              center: { lat: '37.0902', lng: '-95.7129' }
          }
      );
      this.route(this.start, this.finish);
  }
// gOnChangegancho se llama cuando si las coordenadas start o finish cambian, este método se ejecutará.
  public ngOnChanges(changes: SimpleChanges) {
    if ((changes['start'] && !changes['start'].isFirstChange()) || (changes['finish'] && !changes['finish'].isFirstChange())) {
        this.route(this.start, this.finish);
    }
}
public route(start: any, finish: any) { // Usando la API de enrutamiento HERE para navegación
  // tslint:disable-next-line:prefer-const
  let params = {
      'mode': 'fastest;car',
      'waypoint0': 'geo!' + this.start,
      'waypoint1': 'geo!' + this.finish,
      'representation': 'display'
  };
  this.map.removeObjects(this.map.getObjects());
  this.router.calculateRoute(params, data => {
      if (data.response) {
          this.directions = data.response.route[0].leg[0].maneuver;
          data = data.response.route[0];
          // tslint:disable-next-line:prefer-const
          let lineString = new H.geo.LineString();
          data.shape.forEach(point => {
              // tslint:disable-next-line:prefer-const
              let parts = point.split(',');
              lineString.pushLatLngAlt(parts[0], parts[1]);
          });
          // tslint:disable-next-line:prefer-const
          let routeLine = new H.map.Polyline(lineString, {
              style: { strokeColor: 'blue', lineWidth: 5 }
          });
          // tslint:disable-next-line:prefer-const
          let startMarker = new H.map.Marker({
              lat: this.start.split(',')[0],
              lng: this.start.split(',')[1]
          });
          // tslint:disable-next-line:prefer-const
          let finishMarker = new H.map.Marker({
              lat: this.finish.split(',')[0],
              lng: this.finish.split(',')[1]
          });
          this.map.addObjects([routeLine, startMarker, finishMarker]);
          this.map.setViewBounds(routeLine.getBounds());
      }
  }, error => {
      console.error(error);
  });
}
}
