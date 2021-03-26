import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder){ 
    this.generarFormulario();
  }

  form: FormGroup;
  
  ngOnInit(): void {
  }

  generarFormulario():void{
    this.form = this.formBuilder.group({
      usuario: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.email]]
    });
  }
    //Evento del registro
    registro(event: Event):void{
      event.preventDefault();
      if (this.form.invalid){
        this.form.markAllAsTouched();
        return;
      };
  
    }
}
