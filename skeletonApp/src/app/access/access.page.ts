import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-access',
  templateUrl: 'access.page.html',
  styleUrls: ['access.page.scss']
})
export class AccessPage {
  
  constructor(private actionSheetController: ActionSheetController) {}

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Comandos',
      buttons: [{
        text: 'Opción 1',
        handler: () => {
          console.log('Opción 1 clicked');
        }
      }, {
        text: 'Opción 2',
        handler: () => {
          console.log('Opción 2 clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  // Función para manejar el evento click del botón "templates"
  handleTemplates() {
    console.log('Botón templates presionado');
  }

  // Función para manejar el evento click del botón "agendamiento"
  handleAgendamiento() {
    console.log('Botón agendamiento presionado');
  }

}
