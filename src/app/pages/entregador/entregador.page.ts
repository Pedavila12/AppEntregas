import { Router } from '@angular/router';
import { CorreioService } from './../../services/correio.service';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/shared/authentication.service';

@Component({
  selector: 'app-entregador',
  templateUrl: './entregador.page.html',
  styleUrls: ['./entregador.page.scss'],
})
export class EntregadorPage implements OnInit {
  aux: number = 0;
  visto: boolean = false;
  sel: boolean = false;
  constructor(private correioService: CorreioService, private alertCtrl: AlertController, private router: Router, public authService: AuthenticationService) { }

  ngOnInit() {
  }

  localizarObjeto(event) {
    let codigoObjeto = event.detail.value;
    if (codigoObjeto.length == 13) {
      console.log("foi");
      this.visto = true;
    }else{
      this.visto =false;
    }
  }



  selcionaComprador() {
    this.correioService.rotaComprador();
  }

  selcionaEntregador() {
    this.correioService.rotaEntregador();
  }

  async alert() {

    this.sel = true;


    const alert = await this.alertCtrl.create({
      header: 'Deseja iniciar viagem?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => { }
        },
        {
          text: 'Iniciar',
          handler: () => { 
            console.log("Abrir GPS");
            window.open('https://www.google.com.br/maps/dir/-21.7702527,-45.9674667/Est%C3%A1dio+Centen%C3%A1rio,+11400+Montevideo,+Departamento+de+Montevideo,+Uruguai/@-27.9665376,-60.2187846,5z/data=!3m1!4b1!4m9!4m8!1m0!1m5!1m1!1s0x959f81021a293c9f:0x47c23b3c464091c1!2m2!1d-56.1528289!2d-34.8945376!3e0', '_system');
           }
        },

      ]
    });

    await alert.present();

  }


  rastrearEntrega(aux: number, visto: string) {
    this.alert();
  }
}
