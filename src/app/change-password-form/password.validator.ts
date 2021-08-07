import { AbstractControl, ValidationErrors } from "@angular/forms";

export class passwordValidators{
    static old(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
                if (control.value !== '1234')
                    resolve ({ old : true });
                else
                    resolve (null);         
      });  
     }

     static passwordShouldMatch(control: AbstractControl){
         let newPassword = control.get('newPassword');
         let confirmPassword = control.get('confirmPassword');

            if(newPassword.value !== confirmPassword.value)
                return { passwordShouldMatch: true };
            else
                return null;
         
     }

}