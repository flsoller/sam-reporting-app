import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { InputBase } from '../../models/input-base';

@Component({
  selector: 'app-input',
  templateUrl: './dynamic-input.component.html',
})
export class DynamicInputComponent {
  @Input() formField!: InputBase<string>;
  @Input() form!: FormGroup;

  get isValid() {
    return this.form.controls[this.formField.key].valid;
  }
}
