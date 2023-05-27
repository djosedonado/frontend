import { Component } from '@angular/core';
import { Persona } from 'src/app/models/personal';
import { PersonalService } from 'src/app/services/personal.service';

@Component({
  selector: 'app-control-acceso',
  templateUrl: './control-acceso.component.html',
  styleUrls: ['./control-acceso.component.css'],
})
export class ControlAccesoComponent {
  personal: Persona = {
    id: '',
    name: '',
    surname: '',
    sexo: '',
    phone: '',
    email: '',
    image: '',
  };
  constructor(private personaServices: PersonalService) {}

  submitPersona(){

  }
}
