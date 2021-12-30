import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TextFieldComponent),
    multi: true
  }]
})
export class TextFieldComponent implements OnInit, ControlValueAccessor {
  @Input() placeholder?: string
  fieldControl = new FormControl()
  onChange: any
  onTouch: any
  
  ngOnInit(): void {
    this.fieldControl.valueChanges.subscribe(value => {
      if (this.onChange) {
        this.onChange(value)
      }
    })
  }

  writeValue(value: any): void {
    this.fieldControl.setValue(value)
  }

  registerOnChange(callback: any): void {
    this.onChange = callback
  }

  registerOnTouched(callback: any): void {
    this.onTouch = callback
  }
}
