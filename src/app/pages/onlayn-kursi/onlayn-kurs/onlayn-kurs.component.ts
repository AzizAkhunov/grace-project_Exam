import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ApiServiceService } from '../../../Services/api-service.service';
@Component({
  selector: 'app-onlayn-kurs',
  templateUrl: './onlayn-kurs.component.html',
  styleUrl: './onlayn-kurs.component.scss'
})
export class OnlaynKursComponent {
  constructor(private api:ApiServiceService,private formBuilder : FormBuilder,private router: Router) {

  }

  ngOnInit(): void {
    this.usersForm = this.formBuilder.group({
      Name :["" , Validators.required],
      PhoneNumber : ["" , Validators.required]
    })
  }

  usersForm !: FormGroup
  
  post(){
    console.log(this.usersForm.value)
    this.api.postUser(this.usersForm.value)
    .subscribe({
      next:()=>{
        alert("Success")
          this.usersForm.reset()
        },
        error:() =>{
        alert("Error")
      }
      })
  }









  goto_onlayn_kurs() {
    this.router.navigate(['/onlayn-kurs'])
  }
  goto_ochniy_kurs(){
    this.router.navigate(['/ochniy-kurs'])
  }
  goto_obuch_roliki(){
    this.router.navigate(['/free-learns'])
  }
  goto_vse_kursi(){
    this.router.navigate(['/vse-kursi'])
  }
  goto_paid_roliks(){
    this.router.navigate(['/paid-roliks'])
  }

  goto_O_Nas(){
    this.router.navigate(['/o-nas'])
  }
  goto_Otzivi(){
    this.router.navigate(['/otzivi'])
  }
  goto_str_stati(){
    this.router.navigate(['/str-stati'])
  }
}
