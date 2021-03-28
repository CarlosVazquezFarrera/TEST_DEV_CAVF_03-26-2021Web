import { Injectable } from '@angular/core';
import { KeyValues } from '../enum/KeyValues';
import { LocalStorageServiceService } from './local-storage-service.service';

@Injectable({
  providedIn: 'root'
})
export class SessionServiceService {

  constructor(private localStorage: LocalStorageServiceService) { 

  }

  /**
   * Guarda en memoria una variable que hace referencia a que el usuario ya ha iniciado sesión
   */
  login():void{
    this.localStorage.guardarElemento<boolean>(KeyValues.usuarioLogged, true);
  }

  isUserLogged():boolean{
    return this.localStorage.obtenerElemento<true>(KeyValues.usuarioLogged);
  }

}
