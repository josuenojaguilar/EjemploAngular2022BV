import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrls: ['./graficas.component.scss'],
  providers: [ProductosService, UsuarioService]
})
export class GraficasComponent implements OnInit {
  chartOptions = {
    responsive: true,
  };

  //NOMBRES PRODUCTOS
  chartLabels:any = [];
  //CANTIDAD PRODUCTOS
  chartData:any = [];
  chartColors:any = [
    {
      backgroundColor: []
    }
  ];
  chartLegend = true;
  chartPlugins = [];

  public modelProductosGet:any = [];



  constructor(
    public _productosService: ProductosService,
    public _usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
    this.getProductos()
  }

  getProductos(){
    this._productosService.obtenerProductos(this._usuarioService.getToken()).subscribe(
      (response)=>{
        console.log(response.productos);
        this.modelProductosGet = response.productos;
        this.modelProductosGet.forEach(dato => {
          this.chartLabels.push(dato.nombre);
          this.chartData.push(dato.cantidad);
          this.chartColors[0].backgroundColor.push(`#${Math.floor(Math.random()*16777215).toString(16)}`);
        })
      },
      (error)=>{

      }
    )
  }

}
