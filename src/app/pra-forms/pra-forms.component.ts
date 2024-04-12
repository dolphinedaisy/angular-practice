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
      items: this.fb.array([this.createItem()],Validators.required)
    });
  }

  get aliases() {
    return this.myForm.get('aliases') as FormArray;
  }
  addAlias() {
    this.aliases.push(this.fb.control(''));
  }



  addItem() {
    // const item = this.fb.group({
    //   name: ['NNN', Validators.required],
    //   quantity: [5, [Validators.required, Validators.min(1)]],
    //   // Add more form controls as needed
    // });

    this.items.push(this.createItem());
  }
  createItem():FormGroup{
    return this.fb.group({
      name:["",Validators.required],
      quantity:["",Validators.required]
    })
  }
  get items() {
    return this.myForm.get('items') as FormArray;
  }


  get formVal() {
    return this.myForm.value;
  }

  onSubmit() {
    console.log('onSubmit called');
    console.log(this.myForm.value);
  }



}
