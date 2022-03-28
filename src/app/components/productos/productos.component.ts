import { Component, OnInit } from '@angular/core';
import { Productos } from 'src/app/models/productos.model';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
  providers: [ProductosService]
})
export class ProductosComponent implements OnInit {

  public productosModelGet: Productos;
  public productosModelPost: Productos;

  constructor(private _productosService: ProductosService) {
    this.productosModelPost = new Productos(
      '',
      '',
      [],
      [{
        idProveedor: ''
      }],
      0,
      0)
  }

  ngOnInit(): void {
    this.getProductos();
  }

  getProductos(){
    this._productosService.obtenerProductos().subscribe(
      (response) => {
        this.productosModelGet = response.productos;
        console.log(response);
      },
      (error) => {
        console.log(<any>error);

      }
    )
  }

  postProductos(){
    this._productosService.agregarProductos(this.productosModelPost).subscribe(
      (response)=>{
        console.log(response);
        this.getProductos();
        this.productosModelPost.nombre = '';
        this.productosModelPost.cantidad = 0;
        this.productosModelPost.precio = 0;
      },
      (error)=>{
        console.log(<any>error);

      }
    )
  }

}
