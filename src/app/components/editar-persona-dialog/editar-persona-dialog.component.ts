import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BasicResponse } from 'src/app/Models/Api/BasicResponse';
import { PersonaFisica } from 'src/app/Models/PersonaFisica';
import { TokaApiServiceService } from 'src/app/services/toka-api-service.service';
import { environment } from 'src/environments/environment';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-persona-dialog',
  templateUrl: './editar-persona-dialog.component.html',
  styleUrls: ['./editar-persona-dialog.component.css']
})
export class EditarPersonaDialogComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<EditarPersonaDialogComponent>, 
    @Inject(MAT_DIALOG_DATA)public persona: PersonaFisica,
    private servicioTokaApi: TokaApiServiceService,
    private formBuilder: FormBuilder) {
      this.generarFormulario();
     }

  form: FormGroup;

  ngOnInit(): void {
    console.log(this.form);
  }
  generarFormulario():void{
    this.form = this.formBuilder.group({
      fechaRegistro: [this.persona.fechaRegistro, [Validators.required]],
      nombre: [this.persona.nombre, [Validators.required]],
      apellidoPaterno: [this.persona.apellidoPaterno, [Validators.required]],
      apellidoMaterno: [this.persona.apellidoMaterno, [Validators.required]],
      fechaNacimiento: [this.persona.rfc, [Validators.required]],
      rfc: [this.persona.rfc, [Validators.required]],
      correo: [this.persona.correo, [Validators.required]]
    });
  }

  editar():void{
    const persona = new PersonaFisica();
    Swal.showLoading();
    this.servicioTokaApi.login(persona).subscribe((loginResponseToken: BasicResponse)=>{
    if (loginResponseToken.exito){ //Respuesta exitosa del api
      Swal.close();
      this.dialogRef.close();
    }
    else
    { //Respuesta negativa del api
      Swal.fire({
        icon:'warning',
        allowOutsideClick: false,
        text: loginResponseToken.mensaje});
      }
    }, ()=>{
      Swal.fire({ //Error inesperado
        icon:'error',
        allowOutsideClick: false,
        text: environment.errorApiMensaje
      });
    });
    }
}
