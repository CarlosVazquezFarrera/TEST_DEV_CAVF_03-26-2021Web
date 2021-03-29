import { Injectable } from '@angular/core';
import { KeyValues } from '../KeyValues/KeyValues';

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
  guardarElemento<T>(key: string, valor: T): void{
    sessionStorage.setItem(key, JSON.stringify(valor));
  }
  
 /**
  * 
  * @param key 
  * @returns Elemento de T
  * Obtiene de memoria un elemento en especial 
  */
  obtenerElemento<T>(key: string): T{
    let valor: T = JSON.parse(sessionStorage.getItem(key));
    return valor
  }
  /**
  * Elimina un elemento en especial con base al elemento especificado
  */
  borrarElemento(key: string){
    sessionStorage.removeItem(key);
  }  
 /**
  *Borra todo lo que se encuentra en memoria 
  */
  borrarDatos():void{
    sessionStorage.clear();
  }

}