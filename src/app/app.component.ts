import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appHere';
  public query: string;

    public constructor() {
        this.query = 'starbucks';
    }
    public ngOnInit() { }
}
