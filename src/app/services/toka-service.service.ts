import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TokaServiceService {

 //#region  Constructor
 constructor(private http: HttpClient) { 
  this.urlApi = `${environment.UrlApi}login/`; 
}
//#endregion

//#region  Propiedades
private urlApi: string;
//#endregion
}
