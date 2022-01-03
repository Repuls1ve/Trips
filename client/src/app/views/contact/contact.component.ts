import { Component } from '@angular/core';
import { MapStyles } from 'src/app/constants/map-styles.constant';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  styles = MapStyles
}
