import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mis-datos',
  templateUrl: './mis-datos.component.html',
  styleUrls: ['./mis-datos.component.scss']
})
export class MisDatosComponent implements OnInit {

  // Datos de usuario y cliente
  user = {
    usuario: 'NombreUsuario'
  };

  client = {
    firstName: '',
    lastName: '',
    birthDate: null
  };

  // Variables para animaciones (si tienes alguna)
  animateInput = 'state1';

  // Inicialización de segmentValue
  segmentValue: string = 'experiencia'; // Por defecto, puede ajustarse según lo necesario

  constructor() { }

  ngOnInit() {
    // Lógica específica al iniciar el componente si es necesaria
  }

  guardar() {
    console.log('Datos guardados:', this.client);
  }

  limpiarInputs() {
    this.client = {
      firstName: '',
      lastName: '',
      birthDate: null
    };
  }

  mostrarInformacion() {
    console.log('Información del cliente:', this.client);
  }
}
