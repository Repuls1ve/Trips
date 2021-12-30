import { Component, forwardRef, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-rating-input',
  templateUrl: './rating-input.component.html',
  styleUrls: ['./rating-input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => RatingInputComponent),
    multi: true
  }]
})
export class RatingInputComponent implements OnInit, OnDestroy, ControlValueAccessor {
  @Input() label?: string
  @Input() resetSubject?: Subject<void>

  ratingControl = new FormControl()
  onTouch: any
  onChange: any

  hovered = 0
  selected = 0

  ngOnInit(): void {
    this.ratingControl.valueChanges.subscribe(value => {
      if (this.onChange) {
        this.onChange(value)
      }
    })
    this.resetSubject?.subscribe(() => this.setSelected(0))
  }

  ngOnDestroy(): void {
    this.resetSubject?.unsubscribe()
  }

  writeValue(value: any): void {
    this.ratingControl.setValue(value)
  }

  registerOnChange(callback: any): void {
    this.onChange = callback
  }

  registerOnTouched(callback: any): void {
    this.onTouch = callback
  }

  setHovered(rating: number): void {
    this.hovered = rating
  }

  setSelected(rating: number): void {
    this.ratingControl.setValue(rating)
    this.selected = rating
  }
}
