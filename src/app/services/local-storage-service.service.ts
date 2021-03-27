import { Injectable } from '@angular/core';
import { KeyValues } from '../enum/KeyValues';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageServiceService {

  constructor() { }
   /**
   * @param key 
   * @param valor 
   * Guarda un elemento (valor sencillo u objeto) en memoria
   */
  guardarElemento<T>(key: KeyValues, valor: T): void{
    sessionStorage.setItem(key.toString(), JSON.stringify(valor));
  }
  
 /**
  * 
  * @param key 
  * @returns Elemento de T
  * Obtiene de memoria un elemento en especial 
  */
  obtenerElemento<T>(key: KeyValues): T{
    let valor: T = JSON.parse(sessionStorage.getItem(key.toString()));
    return valor
  }
  /**
  * Elimina un elemento en especial con base al elemento especificado
  */
  borrarElemento(key: KeyValues){
    sessionStorage.removeItem(key.toString());
  }  
 /**
  *Borra todo lo que se encuentra en memoria 
  */
  borrarDatos():void{
    sessionStorage.clear();
  }

}