import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @Input() type: string = 'text';
  @Input() control: FormControl | undefined;
  @Input() placeholder: string = '';
  @Input() label: string ='';



  showErrors(){
    return this.control?.touched && this.control?.dirty && this.control?.errors;
  }

}


