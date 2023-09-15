import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  segmentValue: string = 'experiencia';
  user: any = {};
  client = {
    firstName: '',
    lastName: '',
    birthDate: null
  };

  constructor() {}

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('loggedInUser') || '{}');
  }

  guardar() {
    // Lógica para guardar la información.
    console.log("Datos guardados:", this.client);
  }

  mostrarInformacion() {
    // Lógica para mostrar información.
    alert(`Nombre: ${this.client.firstName} \nApellido: ${this.client.lastName} \nFecha de Nacimiento: ${this.client.birthDate}`);
  }

  limpiarInputs() {
    this.client.firstName = '';
    this.client.lastName = '';
    this.client.birthDate = null;
  }
}
