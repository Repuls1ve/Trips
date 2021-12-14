import { Component } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(public media: MediaObserver) {}
  
  readonly tabs = [
    {
      title: "World"
    },
    {
      title: "Africa"
    },
    {
      title: "Asia"
    },
    {
      title: "Europe"
    },
    {
      title: "North America"
    },
    {
      title: "South America"
    },
    {
      title: "Antarctica"
    },
    {
      title: "Australia"
    }
  ]
}
