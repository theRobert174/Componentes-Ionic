import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(private modalCrtl : ModalController) { }

  ngOnInit() {
  }

  async mostrarModal(){
    const modal = await this.modalCrtl.create({
      component: ModalInfoPage,
      componentProps:{
        nombre: 'Fernando',
        pais: 'Costa Rica'
      }
    });
    await modal.present();

    const {data} = await modal.onWillDismiss(); //{ data } entre llaves y propiedad es llamado desestructuracion
    //const {data} = await modal.onDidDismiss();
    console.log(data);
  }

}
