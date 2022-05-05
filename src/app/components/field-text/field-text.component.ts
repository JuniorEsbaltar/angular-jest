import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-field-text',
  templateUrl: './field-text.component.html',
  styleUrls: ['./field-text.component.scss']
})
export class FieldTextComponent {

  @Output() text = new EventEmitter<string>();
  control: FormControl = new FormControl('');
  constructor() { }
  sendText() {
    this.text.emit(this.control.value);
    this.control.reset();
  }
}
