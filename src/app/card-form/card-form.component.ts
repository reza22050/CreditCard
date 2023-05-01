import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent implements OnInit {
  
  // cardForm = new FormGroup({
    // name: new FormControl('Reza')
  // });

  cardForm: FormGroup;

  constructor(){
    this.cardForm = new FormGroup({
      name: new FormControl('', [
        Validators.required, 
        Validators.minLength(3), 
        Validators.maxLength(8)
      ]), 
      cardNumber: new FormControl('', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]), 
      expiredDate: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]), 
      securityCode: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(4)])                            
    })
  }

  submitForm(){
    console.log(this.cardForm.value);
  }

  onResetForm(){
    this.cardForm.reset({name: 'test'});
  }

  ngOnInit(): void {

  }

  get f(){
    return this.cardForm;
  }
  
}
