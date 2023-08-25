import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators  } from '@angular/forms';
import { YearValidators } from '../validators/year-validator';

@Component({
  selector: 'app-user-info-form',
  templateUrl: './user-info-form.component.html',
  styleUrls: ['./user-info-form.component.scss']
})
export class UserInfoFormComponent implements OnInit {
  form!: FormGroup;
  constructor() { }

  value = 189;

  ngOnInit(): void {
    this.form = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl('',[
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$')
      ]),
      postalCode: new FormControl('', [
        Validators.required,
        Validators.maxLength(7),
        Validators.pattern(/^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i),
        YearValidators.yearValidatior
      ])
      
    });
  }

  onSubmit(){
    this.form.markAllAsTouched();
    if(this.form.valid){
      alert("Submitted successfully!!!");
      console.log(this.form.value);
      this.form.reset();
    }
  }

  checkError(val: any){
    return (this.form.get(val)?.invalid && (this.form.get(val)?.dirty || this.form.get(val)?.touched))
  }

}
