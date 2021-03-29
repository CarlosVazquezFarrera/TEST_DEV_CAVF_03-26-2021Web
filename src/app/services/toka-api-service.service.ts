import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PersonaFisica } from '../Models/PersonaFisica';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class TokaApiServiceService {
  //#region Constructor
  constructor(private http: HttpClient) { 
    this.urlApi = `${environment.UrlApiToka}PersonaFisica/`; 
  }
  //#endregion
  
  //#region  Propiedades
  private urlApi: string;
  //#endregion

  /**
 * Ejecute el método del Api que hace el correspondiente Logeo
 * @param usuario 
 * @returns 
 */
   login(usuario: PersonaFisica){
    return this.http.post(`${this.urlApi}Login`, usuario, httpOptions);
  }
  /**
   * Ejecuta el método del api que retorna la información
   * @returns Observable
   */
  obtenerPersonasFisicas(){
    return this.http.get(`${this.urlApi}ObtenerUsuarios`);
  }

  /**
   * Ejeta el método del api que eliminar un usuario
   * @param id 
   * @returns Observable
   */
  eliminarPersonaFisica(id: number){
    return this.http.delete(`${this.urlApi}BorrarPersonaFisica?IdPersonaFisica=${id}`);
  }

  editarPersonaFisica(personaFisica: PersonaFisica){
    return this.http.put(`${this.urlApi}ActualizarPersonaFisica`,personaFisica, httpOptions);
  }
}
