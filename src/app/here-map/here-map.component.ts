import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
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

	public constructor() { }

	public ngOnInit() { }
	public ngAfterViewInit() {
		const platform = new H.service.Platform({
			'app_id': this.appId,
			'app_code': this.appCode
		});
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
				zoom: 20,
				center: { lat: currentPosition.coords.latitude, lng: currentPosition.coords.longitude }
			}
		);
		console.log(position);
	};
}

/*
'app_id': 'eknmdJGbgJ5Rx6BQXKPv',
'app_code': 'zngzizlNjZOy3FMap46xzw'
*/
