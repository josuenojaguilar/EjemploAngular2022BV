import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-usuario',
  templateUrl: './actualizar-usuario.component.html',
  styleUrls: ['./actualizar-usuario.component.scss']
})
export class ActualizarUsuarioComponent implements OnInit {
  user;

  constructor(
    private userRest: UsuarioService
  ) { }

  ngOnInit(): void {
    this.user = this.userRest.getIdentidad();
  }

  updateUser(){
    this.userRest.updateUser(this.user._id, this.user).subscribe({
      next: (response:any)=> {
        Swal.fire({
        title: 'Usuario actualizado',
        icon: 'success',
        showConfirmButton: false,
        timer: 1500
      });
      localStorage.setItem('identidad', JSON.stringify(response.usuario));
    },
      error: (err)=> Swal.fire({
        title: err.error.mensaje,
        icon: 'error',
        showConfirmButton: false,
        timer: 1500
      })
    })
  }

}
