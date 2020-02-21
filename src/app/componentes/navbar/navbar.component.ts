import { Component, OnInit } from '@angular/core';
import { RUTAS } from 'src/app/app-routing.module';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isNavbarCollapsed: boolean;

  numero: number;

  rutas: Array<any>;

  constructor() {
    this.isNavbarCollapsed = true;
    this.numero = 0;

    this.rutas = RUTAS;

  }

  ngOnInit() {
  }


  alternarOculto() {
    if(this.isNavbarCollapsed) {
      this.isNavbarCollapsed = false;
      this.empezarMostrar();
    } else {
      this.empezarOcultar();
    }
  }

  empezarMostrar(){
    if(this.numero < this.rutas.length - 1 ){
      this.numero ++;
      setTimeout(() => { this.empezarMostrar() }, TIME_SHOW);
    } else {
      this.numero++;
    }
  }

  empezarOcultar(){
    if(this.numero > 1){
      this.numero --;
      setTimeout(() => { this.empezarOcultar() }, TIME_SHOW);
    } else {
      this.numero--;
      this.isNavbarCollapsed = true;
    }
  }


}
