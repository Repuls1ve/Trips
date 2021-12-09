import { Component, Input } from '@angular/core';

type variant = 'common' | 'decorative' | 'decorative-expanded'

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() variant: variant = 'common'
  @Input() outlined = false
  @Input() text = ''
}
