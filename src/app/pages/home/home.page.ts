import { CorreioService } from './../../services/correio.service';
import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  eventosCollection : any[] = [];

  constructor(private correioService : CorreioService, private toastCtrl : ToastController, private router : Router, public authService: AuthenticationService ) {}

  localizarObjeto(event){
    let codigoObjeto = event.detail.value;
    if (codigoObjeto.length<3){
      return;
    }

    this.correioService.localizarObjetos(codigoObjeto)
    .then(response =>{
      let correio : any = response;
      this.eventosCollection = correio.objetos[0].eventos;

      console.table(this.eventosCollection);
      
      
    })
    .catch(erro =>{
      this.enviarToast('Objeto não encontrado')
    })
  }
  async enviarToast(mensagem : string) {
    const toast = await this.toastCtrl.create({
      message: mensagem,
      duration: 2000
    });
    toast.present();
  }

  selcionaComprador(){
    this.correioService.rotaComprador();
  }

  selcionaEntregador(){
    this.correioService.rotaEntregador();
  }

}
