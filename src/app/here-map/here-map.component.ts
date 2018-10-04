import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { HereService } from '../services/here.service';
declare var H: any;
@Component({
  selector: 'app-here-map',
  templateUrl: './here-map.component.html',
  styleUrls: ['./here-map.component.css']
})
export class HereMapComponent implements OnInit {

  @ViewChild('map')
  public mapElement: ElementRef;

  @Input()
  public width: any;

  @Input()
  public height: any;
  markerUser: any;

  public constructor(private hereService: HereService) {
    this.platform = this.hereService.hereServicePlatform();
 }
  private ui: any;
  private search: any;
  public map: any;
  public platform: any;
  public lat: any;
  public lng: any;
  currentPosition: any;
  public coordinates: any;
  public marker: any;
  // funcionalidad se inicializa antes de que la vista esté lista, de ahí el ngOnInit
  public ngOnInit() {
    this.search = new H.places.Search(this.platform.getPlacesService());
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((showPosition) => {
        this.currentPosition = showPosition;
        this.lat = showPosition.coords.latitude;
        this.lng = showPosition.coords.longitude;
        this.centerPosition();
      });
      console.log(this.currentPosition);
    }
  }

  centerPosition() {
    const defaultLayers = this.platform.createDefaultLayers();
    this.map = new H.Map(
      this.mapElement.nativeElement,
      defaultLayers.normal.map,
      {
        zoom: 15,
        center: { lat: this.lat, lng: this.lng }
      },
      this.coordinates = { lat: this.lat, lng: this.lng }
    );
    // tslint:disable-next-line:prefer-const
    let behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(this.map));
    this.ui = H.ui.UI.createDefault(this.map, defaultLayers);
    this.showMarkerUser(this.coordinates);
  }

  showMarkerUser(coordinates: any) {
    this.hereService.displayDefaultMarker(coordinates);
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
}


/*
'app_id': 'eknmdJGbgJ5Rx6BQXKPv',
'app_code': 'zngzizlNjZOy3FMap46xzw'
*/
