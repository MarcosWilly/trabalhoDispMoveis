import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContactPage } from '../contact/contact';
import { AboutPage } from '../about/about';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  abrirTela(){
    this.navCtrl.push(ContactPage);
  }   

  abrirTela2(){
    this.navCtrl.push(AboutPage);
  }
}
