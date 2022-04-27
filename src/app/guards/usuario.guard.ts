import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuarioGuard implements CanActivate {

  constructor(
    private userRest: UsuarioService,
    public router: Router
  ){}

  canActivate(){
    if(this.userRest.getIdentidad().rol === 'USUARIO'){
      return true;
    }else{
      this.router.navigate(['']);
      return false;      
    }
  }
  
}
