import { Component } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-pra-forms',
  templateUrl: './pra-forms.component.html',
  styleUrl: './pra-forms.component.scss'
})
export class PraFormsComponent {

  myForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      userName: ['', Validators.required],
      userEmail: ['', Validators.required],
      // -- nested group
      address: this.fb.group({
        street: [''],
        city: [''],
        state: [''],
        zip: [''],
      }),
      aliases: this.fb.array([this.fb.control('')]),
    });
  }

  get aliases() {
    return this.myForm.get('aliases') as FormArray;
  }
  addAlias() {
    this.aliases.push(this.fb.control(''));
  }


  get formVal() {
    return this.myForm.value;
  }

  onSubmit() {
    console.log('onSubmit called');
    console.log(this.myForm.value);
  }



}
