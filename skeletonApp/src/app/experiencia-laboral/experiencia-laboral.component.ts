import { Component } from '@angular/core';

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.scss'],
})
export class ExperienciaLaboralComponent {
  
  experience = {
    empresa: '',
    anoInicio: null,
    trabajando: false,
    anoTermino: null,
    cargo: ''
  };

  mostrarExperiencia(): void {
    // Esto solo imprime la experiencia laboral en la consola para fines de verificación.
    console.log('Experiencia:', this.experience);
  }
}
