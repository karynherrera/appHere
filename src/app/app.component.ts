import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appHere';
  public query: string;
  public start: string;
  public finish: string;
    public constructor() {
        this.query = 'starbucks';
        this.start = '37.7397,-121.4252'; // se vincularán a nuestro formulario start y finish
        this.finish = '37.6819,-121.7680';
    }
    // tslint:disable-next-line:use-life-cycle-interface
    public ngOnInit() { }
}
