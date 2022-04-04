import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Productos } from '../models/productos.model';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  public url: String = 'http://localhost:3000/api';
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(public _http: HttpClient) { }

  obtenerProductos(token) : Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token )

    return this._http.get(this.url + '/productos', { headers: headersToken });
  }

  agregarProductos(modeloProductos: Productos) : Observable<any> {
    let parametros = JSON.stringify(modeloProductos);

    return this._http.post(this.url + '/agregarProductos', parametros, { headers: this.headersVariable });
  }

  eliminarProducto( idProducto ): Observable<any> {

    return this._http.delete(this.url + '/eliminarProducto/' + idProducto, {headers: this.headersVariable})
  }

}
