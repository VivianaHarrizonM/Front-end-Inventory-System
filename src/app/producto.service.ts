import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from './producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private UrlBase = "http://localhost:8080/inventario-app/productos";
  private clienteHTTP = inject(HttpClient);

  obtenerProductosLista(): Observable<Producto[]>{
    return this.clienteHTTP.get<Producto[]>(this.UrlBase);
  }

}
