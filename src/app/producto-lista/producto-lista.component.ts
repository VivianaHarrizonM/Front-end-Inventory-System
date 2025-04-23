import { Component, inject } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto-lista',
  imports: [],
  templateUrl: './producto-lista.component.html'
})
export class ProductoListaComponent {
  productos!: Producto[];

  private productoServicio = inject(ProductoService);
  private enrutador = inject(Router);

  ngOnInit(){
    //Cargar los productos
    this.obtenerProductos();
  }

  private obtenerProductos(): void {
    this.productoServicio.obtenerProductosLista().subscribe({
      next: (datos) => {
        this.productos = datos;
      },
      error: (error) => {
        console.error("Error al obtener los productos", error);
        alert("Ocurrió un error al obtener los productos. Por favor, intenta más tarde.");
      }
    });
  }

  editarProducto(id: number){
    this.enrutador.navigate(['editar-producto', id]);
  }
  
  eliminarProducto(id: number) {
    this.productoServicio.eliminarProducto(id).subscribe({
      next: () => {
        this.obtenerProductos();
      },
      error: (error) => {
        console.error("Error al eliminar el producto", error);
        alert("No se pudo eliminar el producto. Intenta más tarde.");
      }
    });
  }
}
