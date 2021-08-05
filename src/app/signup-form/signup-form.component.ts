import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsernameValidators } from './username.validator';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  form = new FormGroup({
    username: new FormControl('',
      Validators.required,
       //Validators.minLength(3),
       //UsernameValidators.cannotContainSpace,
      UsernameValidators.shouldBeUnique
    
    ),
    password: new FormControl('',Validators.required)
  });  

  get username(){
    return this.form.get('username');
  }

  get password(){
    return this.form.get('password');
  }

  constructor() { }

  ngOnInit(): void {
    console.log('Hellooooo');
   
  }
  
  login(){
    this.form.setErrors({
      invalidLogin: true
    })
  }

}
