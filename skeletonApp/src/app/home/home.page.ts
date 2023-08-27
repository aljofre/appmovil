import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  constructor(private actionSheetController: ActionSheetController) {}

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Comandos',
      buttons: [{
        text: 'GV55',
        handler: () => {
          console.log('Opción 1 clicked');
        }
      }, {
        text: 'GV75',
        handler: () => {
          console.log('Opción 2 clicked');
        }
      }]
    });
    await actionSheet.present();
  }
  
  // Otros métodos y lógica pueden seguir aquí...
}
