import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TextAreaComponent),
    multi: true
  }]
})
export class TextAreaComponent implements OnInit, ControlValueAccessor {
  @Input() placeholder?: string
  areaControl = new FormControl()
  onTouch: any
  onChange: any

  ngOnInit(): void {
    this.areaControl.valueChanges.subscribe(value => {
      if (this.onChange) {
        this.onChange(value)
      }
    })
  }

  writeValue(value: any): void {
    this.areaControl.setValue(value)
  }

  registerOnChange(callback: any): void {
    this.onChange = callback
  }

  registerOnTouched(callback: any): void {
    this.onTouch = callback
  }

}
