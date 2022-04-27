import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.scss'],
  providers: [ProductosService]
})
export class DetalleProductoComponent implements OnInit {
  product;
  load: boolean = false;

  constructor(
    public _activatedRoute: ActivatedRoute,
    public _productosService: ProductosService
  ) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((dataRuta)=>{
      console.log(dataRuta.get('idProducto'));
      this.getProductoId(dataRuta.get('idProducto'))
    })
  }

  getProductoId(idProducto){
    this._productosService.obtenerProductoId(idProducto).subscribe({
      next: (response)=>{
        this.product = response.producto;
        this.load = true;
      },
      error: (err)=> Swal.fire({
        title: err.error.mensaje,
        icon: 'error',
        timer: 2000
      })
    })
  }

}
