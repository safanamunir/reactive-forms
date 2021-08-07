import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { passwordValidators } from './password.validator';

@Component({
  selector: 'change-password-form',
  templateUrl: './change-password-form.component.html',
  styleUrls: ['./change-password-form.component.css']
})
export class ChangePasswordFormComponent implements OnInit {
  changePasswordForm: FormGroup;

  constructor(fb: FormBuilder) { 
    this.changePasswordForm = fb.group({
      oldPassword: ['',
      Validators.required,
      passwordValidators.old
    ],
    newPassword: ['', Validators.required],
    confirmPassword: ['', Validators.required],
    },{
      validators: passwordValidators.passwordShouldMatch
    })
  }


  get oldPassword(){
    return this.changePasswordForm.get('oldPassword');
  }
  get newPassword(){
    return this.changePasswordForm.get('newPassword');
  }
  get confirmPassword(){
    return this.changePasswordForm.get('confirmPassword');
  }


  

  ngOnInit(): void {
  }

}
