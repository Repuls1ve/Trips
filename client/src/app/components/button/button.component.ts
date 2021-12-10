import { Component, Input } from '@angular/core';

type variant = 'common' | 'search' | 'decorative' | 'decorative-alternative'
type theme = 'light' | 'dark'

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() variant: variant = 'common'
  @Input() theme: theme = 'light' 
  @Input() text = ''
}
