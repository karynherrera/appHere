import { Component, OnInit, ViewChild, ElementRef, Output } from '@angular/core';
import { HereService } from '../services/here.service';
declare var H: any;
@Component({
  selector: 'app-here-map',
  templateUrl: './here-map.component.html',
  styleUrls: ['./here-map.component.css']
})
export class HereMapComponent implements OnInit {
  @Output()
  //@ouput() dataShared:boolean = false;
  @ViewChild('map')
  public mapElement: ElementRef;

  markerUser: any;
  public query: string;
  public constructor(private hereService: HereService) {
    this.query = '';
        this.start = '37.7397,-121.4252'; // se vincularán a nuestro formulario start y finish
        this.finish = '37.6819,-121.7680';
    this.platform = this.hereService.hereServicePlatform();
 }

  public userQuery: any;
  private ui: any;
  private search: any;
  public map: any;
  public platform: any;
  public lat: any;
  public lng: any;
  currentPosition: any;
  public coordinates: any;
  public marker: any;

  public start: any;
  public finish: any;
  public directions: any;
  private router: any;

  // funcionalidad se inicializa antes de que la vista esté lista, de ahí el ngOnInit
  public ngOnInit() {
    this.search = new H.places.Search(this.platform.getPlacesService());
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((showPosition) => {
        this.lat = showPosition.coords.latitude;
        this.lng = showPosition.coords.longitude;
        this.centerPosition();
      });
    }
  }

  centerPosition() {
    console.log(this.platform);
    const defaultLayers = this.platform.createDefaultLayers();
    this.map = new H.Map(
      this.mapElement.nativeElement,
      defaultLayers.normal.map,
      {
        zoom: 15,
        center: { lat: this.lat, lng: this.lng }
      }
    );
    // tslint:disable-next-line:prefer-const
    this.displayCurrentPosition();
    const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(this.map));
    this.ui = H.ui.UI.createDefault(this.map, defaultLayers);
  }

  //catch query menu
  public catchQuery(resp: string){
    //this.userQuery = resp;
    console.log(resp);
    //this.places(query);
  }

  // Buscador
  public places(query: string) {
    this.map.removeObjects(this.map.getObjects());
    this.search.request({ 'q': query, 'at': this.lat + ',' + this.lng }, {}, data => {
      for (let i = 0; i < data.results.items.length; i++) {
        this.dropMarker({ 'lat': data.results.items[i].position[0], 'lng': data.results.items[i].position[1] }, data.results.items[i]);
      }
    }, error => {
      console.error(error);
    });
  }
  // Marcadores
  private dropMarker(coordinates: any, data: any) {
    const marker = new H.map.Marker(coordinates);
    marker.setData('<p>' + data.title + '<br>' + data.vicinity + '</p>');
    marker.addEventListener('tap', event => {
      const bubble = new H.ui.InfoBubble(event.target.getPosition(), {
        content: event.target.getData()
      });
      this.ui.addBubble(bubble);
    }, false);
    this.map.addObject(marker);
  }

  // Icono marcador de posicion de usario
  displayCurrentPosition() {
    // tslint:disable-next-line:max-line-length
    const svgMarkup = '<svg aria-hidden="true" data-prefix="fas" data-icon="map-pin" width="30" height="30" class="svg-inline--fa fa-map-pin fa-w-9" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 288 512"><path fill="currentColor" d="M112 316.94v156.69l22.02 33.02c4.75 7.12 15.22 7.12 19.97 0L176 473.63V316.94c-10.39 1.92-21.06 3.06-32 3.06s-21.61-1.14-32-3.06zM144 0C64.47 0 0 64.47 0 144s64.47 144 144 144 144-64.47 144-144S223.53 0 144 0zm0 76c-37.5 0-68 30.5-68 68 0 6.62-5.38 12-12 12s-12-5.38-12-12c0-50.73 41.28-92 92-92 6.62 0 12 5.38 12 12s-5.38 12-12 12z"></path></svg>';
    // tslint:disable-next-line:prefer-const
    let svgIcon = new H.map.Icon(svgMarkup),
      coords = {
        lat: this.lat,
        lng: this.lng
      },
      marker = new H.map.Marker(coords, {
        icon: svgIcon
      });
    this.map.addObject(marker);
  }
// Routing





}


/*
'app_id': 'eknmdJGbgJ5Rx6BQXKPv',
'app_code': 'zngzizlNjZOy3FMap46xzw'
*/
