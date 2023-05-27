export class Persona {
  id: string;
  name: string;
  surname: string;
  sexo: string;
  phone: string;
  email: string;
  image: string;
  constructor(
    id: string,
    name: string,
    surname: string,
    sexo: string,
    phone: string,
    email: string,
    iamge: string
  ) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.sexo = sexo;
    this.phone = phone;
    this.email = email;
    this.image = iamge;
  }
}
