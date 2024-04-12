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
      items: this.fb.array([this.createItem()],Validators.required),
      hobbies: this.fb.array([],Validators.required),
    });

    this.createHobby('Surfing');
    this.createHobby('Hiking');
    this.createHobby('Exploring');
  }

  createHobby(hobbyName: string) {
    const hobby = this.fb.group({
      selected:[null,Validators.required],
      name:[hobbyName,Validators.required]
    });
    this.hobbies.push(hobby);
  }
  get hobbies() { return this.myForm.get('hobbies') as FormArray; }

  get aliases() { return this.myForm.get('aliases') as FormArray; }
  addAlias() { this.aliases.push(this.fb.control('')); }

  addItem() { this.items.push(this.createItem()); }
  createItem():FormGroup{
    return this.fb.group({
      name:["",Validators.required],
      quantity:["",Validators.required]
    })
  }
  get items() { return this.myForm.get('items') as FormArray; }


  get formVal() {
    return this.myForm.value;
  }

  onSubmit() {
    console.log('onSubmit called');
    console.log(this.myForm.value);
  }



}
