import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { KeyValues } from 'src/app/enum/KeyValues';
import { Response } from 'src/app/Models/Api/Response';
import { Usuario } from 'src/app/Models/Usuario';
import { SessionServiceService } from 'src/app/services/session-service.service';
import { TokaApiServiceService } from 'src/app/services/toka-api-service.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private servicioTokaApi:TokaApiServiceService,
    private router: Router,
    private sessionService: SessionServiceService){ 
    this.generarFormulario();
  }

  form: FormGroup;
  
  //#endregion Métodos
  ngOnInit(): void {
  }
  /**
   * Genera el formulario reactivo
   */
    generarFormulario():void{
      this.form = this.formBuilder.group({
        usuario: ['carlos5@gmail.com', [Validators.required]],
        password: ['12345', [Validators.required]]
      });
    }
   /**
    * Login de usuario. Manda a llamar el método del Api que valida si es un usuario válido o no
    * @param event 
    * @returns 
    */
   login(event: Event):void{
     event.preventDefault();
     if (this.form.invalid){
      this.form.markAllAsTouched();
      return;
    };
    this.IniciarSesion();
    }

    /**
     * Ejecuta el método del api que hace el login
     */
  IniciarSesion():void{
    Swal.showLoading();
    const usuario = new Usuario(this.usuarioFiel.value, this.passwordFiel.value);
    this.servicioTokaApi.login(usuario).subscribe((loginResponseToken: Response<Usuario>)=>{
    if (loginResponseToken.exito){ //Respuesta exitosa del api
      Swal.close();
      this.sessionService.login();
      this.router.navigateByUrl('personaFisica');
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
    //#endregion

    //#region Get
    /**
     * Obtiene el objeto relacionado al usuario 
     */
    get usuarioFiel(){
      return this.form.get('usuario');
    }
    /**
     * Obtiene el objeto relacionada a la contraseña
     */
    get passwordFiel(){
      return this.form.get('password');
    }

    //#endregion
}
