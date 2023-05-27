import { Component, OnInit } from '@angular/core';
import { PersonalService } from '../../services/personal.service';
import { Persona } from 'src/app/models/personal';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-listar-personal',
  templateUrl: './listar-personal.component.html',
  styleUrls: ['./listar-personal.component.css'],
})
export class ListarPersonalComponent implements OnInit{
  personal: Persona[] = [];

  constructor(
    private personalServices: PersonalService,
  ) {}

  ngOnInit() {
    this.getPersonal();
  }

  getPersonal(): void {
    this.personalServices.getPersonal().subscribe(
      (data) => {
        this.personal = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  borrar(id: string) {
    Swal.fire({
      title: 'Esta seguro?',
      text: 'desdea Borrar este usuario',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.value) {
        this.personalServices
          .deleteUsaurio(id)
          .subscribe((res) => this.getPersonal());
        Swal.fire('OK!', 'Persona Eliminada', 'success');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelado!', 'Operacion Cancelada', 'error');
      }
    });
  }
}
