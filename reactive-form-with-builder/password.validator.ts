import { AbstractControl, ValidatorFn } from "@angular/forms";

export function PasswordValidator(control : AbstractControl) : {[key :string] : boolean} | null  {
        const password = control.get('password');
        const confPassword = control.get('confirmPassword');
        if(password.pristine || confPassword.pristine){
            return null;
        }
        return password && confPassword && password.value !== confPassword.value ? {'misMatch' : true} : null;
    }
