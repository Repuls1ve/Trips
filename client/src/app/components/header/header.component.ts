import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('slide', [
      transition(':enter', [
        style({
          transform: 'translateY(-100%)',
        }),
        animate(350)
      ]),
      transition(':leave', [
        animate(350, style({
          transform: 'translateY(-100%)'
        }))
      ])
    ])
  ]
})
export class HeaderComponent {
  sidebarClosed = true
  constructor(public media: MediaObserver) {}

  toggleSidebar() {
    this.sidebarClosed = !this.sidebarClosed
  }
}
