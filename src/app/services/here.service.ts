import { Injectable } from '@angular/core';
declare var H: any;
@Injectable({
  providedIn: 'root'
})
export class HereService {
  private platform: any;
  constructor() {
    this.platform = new H.service.Platform({
      'app_id': 'eknmdJGbgJ5Rx6BQXKPv',
      'app_code': 'zngzizlNjZOy3FMap46xzw'
    });
  }
  hereServicePlatform() {
    return this.platform;
  }
}
