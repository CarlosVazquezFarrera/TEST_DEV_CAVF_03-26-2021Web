import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Usuario } from '../Models/Usuario';
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
   login(usuario: Usuario){
    return this.http.post(`${this.urlApi}Login`, usuario, httpOptions);
  }
}
