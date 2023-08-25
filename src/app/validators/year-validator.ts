import { FormControl, ValidationErrors } from "@angular/forms";

export class YearValidators {
    static yearValidatior(control: FormControl): ValidationErrors{
        let output : Number = parseInt(control.value)
        let currentYear = new Date().getFullYear();
        if(output > currentYear + 1 || output < 1900){
            return { 'yearValidatior': true }
        }
        else{
            return null as any;
        }
    }
}
