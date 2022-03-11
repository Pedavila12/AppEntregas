import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CorreioService {

  constructor(private http: HttpClient, private router : Router) { }

  localizarObjetos(codigoObjeto : string){
    let url = 'https://cors-anywhere.herokuapp.com/https://proxyapp.correios.com.br/v1/sro-rastro/' + codigoObjeto;
 
    var header ={
      headers: new HttpHeaders()
        .set('Content-Type', 'aplication/json'),
        
    }
 
    return this.http.get(url, header).toPromise();
  }

  rotaComprador(){
    this.router.navigate(['home']);
  }

  rotaEntregador(){
    this.router.navigate(['entregador']);
  }
}
