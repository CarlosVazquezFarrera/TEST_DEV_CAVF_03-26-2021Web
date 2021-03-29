import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { BasicResponse } from 'src/app/Models/Api/BasicResponse';

import { Response } from 'src/app/Models/Api/Response';
import { PersonaFisica } from 'src/app/Models/PersonaFisica';
import { TokaApiServiceService } from 'src/app/services/toka-api-service.service';
import { environment } from 'src/environments/environment';
import { EditarPersonaDialogComponent } from '../editar-persona-dialog/editar-persona-dialog.component';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-persona-fisica',
  templateUrl: './persona-fisica.component.html',
  styleUrls: ['./persona-fisica.component.css']
})
export class PersonaFisicaComponent implements OnInit {
  constructor(private servicioTokaApi:TokaApiServiceService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog) { 
  }

  personasFisicas: Array<PersonaFisica>;
  columnas: string[] = [
    'fechaRegistro', 
    'fechaActualizacion', 
    'nombre', 
    'apellidoPaterno', 
    'apellidoMaterno', 
    'rfc', 
    'fechaNacimiento', 
    'activo', 
    'correo',
    'actualizar',
    'eliminar'
  ];
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  
  //#endregion Métodos
  ngOnInit(): void {
    this.obtenerPersonasFisicas();
  }
  /**
   * Carag los datos del api
   */
  obtenerPersonasFisicas(): void{
    Swal.fire({
      icon:'info',
      allowOutsideClick: false,
      text: 'Cargando datos'
    });
    Swal.showLoading();
    this.servicioTokaApi.obtenerPersonasFisicas().subscribe((responseObtenerPersonasApi: Response<Array<PersonaFisica>>)=>{
      if (responseObtenerPersonasApi.exito){ //Respuesta exitosa del api
        Swal.close();
        this.personasFisicas = responseObtenerPersonasApi.data;
      }
      else
      { //Respuesta negativa del api
        Swal.fire({
          icon:'warning',
          allowOutsideClick: false,
          text: responseObtenerPersonasApi.mensaje});
        }
      }, ()=>{
        Swal.fire({ //Error inesperado
          icon:'error',
          allowOutsideClick: false,
          text: environment.errorApiMensaje
        });
      });
    Swal.close();
  }

  /**
   * Ejecuta la llamada del api en la con la que se desactiva un usuario
   * @param usuario 
   */
  desactivarPersona(usuario: PersonaFisica): void{
      console.log(usuario);
      Swal.fire({
        title: `¿Seguro que desea desactivar al usuario ${usuario.nombre}?`,
        showCancelButton: true,
        confirmButtonText: `Sí`,
        cancelButtonText: `No`,
        confirmButtonColor: '#d14529'
      }).then((result) => {
        if (result.isConfirmed) {
          this.servicioTokaApi.eliminarPersonaFisica(usuario.idPersonaFisica).subscribe((apiDesactivarUsuarioResponse: BasicResponse)=>{
            if(apiDesactivarUsuarioResponse.exito){
              this.obtenerPersonasFisicas();
              this.snackBar.open('Se desactivó al usuario',  'Aceptar', {
                duration: 5000,
                horizontalPosition: this.horizontalPosition,
                verticalPosition: this.verticalPosition,
              });
            }
            else{
              Swal.fire({
                icon:'info',
                allowOutsideClick: false,
                text: apiDesactivarUsuarioResponse.mensaje
              }); 
            }
          });
        }
      })
  }

  editarPersona(persona: PersonaFisica): void{
    const dialogRef = this.dialog.open(EditarPersonaDialogComponent,{
      width: '300',
      disableClose: true,
      data: persona
    });
    dialogRef.afterClosed().subscribe(()=>{
      this.obtenerPersonasFisicas();
    });
  }
  //#endregion
}
