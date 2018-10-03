import { Component, OnInit } from '@angular/core';
import { HereService } from '../services/here.service';
declare var H: any;

@Component({
  selector: 'app-here-map-apis',
  templateUrl: './here-map-apis.component.html',
  styleUrls: ['./here-map-apis.component.css']
})
export class HereMapApisComponent implements OnInit {
  public platform: any;
  public map: any;
  constructor( private hereService: HereService) {
    this.platform = this.hereService.hereServicePlatform();
  }

  ngOnInit() {
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
	};
}

// Geolocalizar usuario en el mapa
// Pintar mapa en la Pantalla
// Mostrar marcador en el mapa
// Mostrar marcador de ubicacion de usuario en el mapa


}
