import { Component, OnInit } from '@angular/core';
import { Persona } from '../../models/personal';
import { PersonalService } from 'src/app/services/personal.service';
import { Observable, Subscriber } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-registar-personal',
  templateUrl: './registar-personal.component.html',
  styleUrls: ['./registar-personal.component.css'],
})
export class RegistarPersonalComponent implements OnInit {
  personal: Persona = {
    id: '',
    name: '',
    surname: '',
    sexo: '',
    phone: '',
    email: '',
    image: '',
  };
  mensaje = {
    mesasge: 'Campo Vacio',
  };
  constructor(
    private personaServices: PersonalService,
    private toastr: ToastrService
  ) {}
  ngOnInit(): void {}

  myImage!: Observable<any>;
  base64!: any;

  onChange($event: Event) {
    const target = $event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    console.log(file);

    this.convertToBase64(file);
  }

  convertToBase64(file: File) {
    const observable = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(file, subscriber);
    });
    observable.subscribe((d) => {
      this.personal.image = d;
      this.myImage = d;
    });
  }

  readFile(file: File, subscriber: Subscriber<any>) {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      subscriber.next(fileReader.result);
      subscriber.complete();
    };

    fileReader.onerror = () => {
      subscriber.error();
      subscriber.complete();
    };
  }

  submitPersona(){
    if (
      this.personal.id == '' ||
      this.personal.name == '' ||
      this.personal.surname == '' ||
      this.personal.phone == '' ||
      this.personal.sexo == '' ||
      this.personal.email == '' ||
      this.personal.image == ''
    ) {
      console.log(this.mensaje);
    } else {
      console.log(this.personal);

      this.personaServices.crearPersonal(this.personal).subscribe(
        data => {
          this.toastr.success(data.message, 'OK', {
            timeOut: 3000, positionClass: 'toast-top-center'
          });
        },
        err => {
          this.toastr.error(err.error.message, 'Fail', {
            timeOut: 3000,  positionClass: 'toast-top-center',
          });
        }
      )
    }
  }
}
