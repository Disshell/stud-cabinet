import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationForm: FormGroup = new FormGroup({
    'firstName': new FormControl('', Validators.required),
    'lastName' : new FormControl('', Validators.required),
    'email': new FormControl('', [Validators.required, Validators.email]),
    'password': new FormControl('', [Validators.required]),
    'repeatedPassword': new FormControl('', [])
    }
  );
  get email() { return this.registrationForm.get('email');}
  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.registrationForm);
  }

}
