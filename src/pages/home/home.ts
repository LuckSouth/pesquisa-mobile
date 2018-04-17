import { Component } from '@angular/core';
import { NavController, ActionSheetController, AlertController } from 'ionic-angular';
import { SegundaPage } from "../../pages/segunda/segunda"

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public actionSheetCtrl: ActionSheetController) {

  }

  openNavDetailsPage(item) {
    this.navCtrl.push(SegundaPage, { item: item })

  }

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Vizualizar',
          role: 'destructive',
          handler: () => {
            this.navCtrl.push(SegundaPage);

          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

}
