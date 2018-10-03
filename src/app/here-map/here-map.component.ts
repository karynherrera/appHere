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
  public appId: any;

  @Input()
  public appCode: any;

  @Input()
  public lat: any;

  @Input()
  public lng: any;

  @Input()
  public width: any;

  @Input()
  public height: any;

  public constructor(private hereService: HereService ) {
    this.platform = this.hereService.hereServicePlatform();
 }
  private ui: any;
  private search: any;
  public map: any;
  public platform: any;
  // funcionalidad se inicializa antes de que la vista esté lista, de ahí el ngOnInit
  public ngOnInit() {
    this.search = new H.places.Search(this.platform.getPlacesService());
  }

  // tslint:disable-next-line:use-life-cycle-interface
  public ngAfterViewInit() {
    const defaultLayers = this.platform.createDefaultLayers();
    this.map = new H.Map(
      this.mapElement.nativeElement,
      defaultLayers.normal.map,
      {
        zoom: 10,
        center: { lat: this.lat, lng: this.lng }
      }
    );
    // tslint:disable-next-line:prefer-const
    let behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(this.map));
    this.ui = H.ui.UI.createDefault(this.map, defaultLayers);
  }
/*	public ngAfterViewInit() { // comportamiento de UI y evento

		const defaultLayers = platform.createDefaultLayers();
		let currentPosition = null;
		const map = null;
		// geolocalizar
		navigator.geolocation.getCurrentPosition((position) => {
	  currentPosition = position;
		const map = new H.Map(
			this.mapElement.nativeElement,
			defaultLayers.normal.map,
			{
				zoom: 15,
				center: { lat: currentPosition.coords.latitude, lng: currentPosition.coords.longitude }
			}
		);
		console.log(position);
	};*/
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
