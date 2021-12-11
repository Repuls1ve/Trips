import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  //Replace the test data with the data received from the server
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
