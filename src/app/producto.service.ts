import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from './producto';
import { environment } from './env/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private UrlBase = `${environment.apiUrl}/productos`;
  private clienteHTTP = inject(HttpClient);

  obtenerProductosLista(): Observable<Producto[]>{
    return this.clienteHTTP.get<Producto[]>(this.UrlBase);
  }

  agregarProducto(producto: Producto): Observable <Object>{
    return this.clienteHTTP.post(this.UrlBase, producto);
  }

  obtenerProductoPorId(id: number){
    return this.clienteHTTP.get<Producto>(`${this.UrlBase}/${id}`);
  }

  editarProducto(id: number, producto: Producto){
    return this.clienteHTTP.put(`${this.UrlBase}/${id}`, producto);
  }

  eliminarProducto(id: number): Observable<Object>{
    return this.clienteHTTP.delete(`${this.UrlBase}/${id}`);
  }
}
