import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarUsuarioComponent } from './components/actualizar-usuario/actualizar-usuario.component';
import { DetalleProductoComponent } from './components/detalle-producto/detalle-producto.component';
import { GraficasComponent } from './components/graficas/graficas.component';
import { InicioUsuarioComponent } from './components/inicio-usuario/inicio-usuario.component';
import { LoginComponent } from './components/login/login.component';
import { ProductosComponent } from './components/productos/productos.component';
import { RegistroComponent } from './components/registro/registro.component';
import { UsuarioGuard } from './guards/usuario.guard';

const routes: Routes = [
  { path: '', component: LoginComponent}, //Ruta por default / 1 uso
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'graficas', component: GraficasComponent },
  { path: 'usuario', component: InicioUsuarioComponent, canActivate: [UsuarioGuard], children: [
    { path: 'actualizarUsuario', component: ActualizarUsuarioComponent},
    { path: 'productos', component: ProductosComponent },
    { path: 'detalleProducto/:idProducto', component: DetalleProductoComponent },
    { path: 'graficas', component: GraficasComponent },
  ]},
  { path: '**', component: LoginComponent} //Para rutas inexistentes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
