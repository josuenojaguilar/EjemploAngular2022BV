import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [UsuarioService]
})
export class NavbarComponent implements OnInit {

  constructor(public _usuarioService: UsuarioService) {
   }

  ngOnInit(): void {
  }

  logOut(){
    localStorage.clear();
    //localStorage.removeItem('token');
  }

}
