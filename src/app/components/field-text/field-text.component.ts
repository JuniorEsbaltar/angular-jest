import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TextService } from '../../services/text.service';

@Component({
  selector: 'app-field-text',
  templateUrl: './field-text.component.html',
  styleUrls: ['./field-text.component.scss']
})
export class FieldTextComponent {

  control: FormControl = new FormControl();
  constructor(private textService: TextService) { }

  sendText() {
    this.textService.setText(this.control.value);
    this.control.reset();
  }
}
