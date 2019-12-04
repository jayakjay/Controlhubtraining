import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-inputholder',
  templateUrl: './inputholder.component.html',
  styleUrls: ['./inputholder.component.css']
})
export class InputholderComponent implements OnInit {
  ngOnInit() {
  }
  dataModel: string = 'Test';

  inputForm;
  constructor(private fb: FormBuilder) {

    this.inputForm = this.fb.group({
      inputControl: ['', Validators.compose(
        [ Validators.required,
          Validators.minLength(10),
          Validators.maxLength(14),
          ValidateCustom
        ]),
      ]
    });

    console.info(this.inputForm);
  }
}
function ValidateCustom(control: AbstractControl) {
  if (!control.value.startsWith('custom')) {
    return { customValid: true };
  }
  return null;
  

}
