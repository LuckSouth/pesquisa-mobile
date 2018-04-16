import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SegundaPage } from "../../pages/segunda/segunda"

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  
  }

  openNavDetailsPage(item) {
    this.navCtrl.push(SegundaPage, { item: item })

  }}
