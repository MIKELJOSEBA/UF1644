import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  lista: Array<any>;

  constructor(private router: Router) {
    this.lista = new Array<any>();
  }

  ngOnInit() {
    this.lista = [
      {
        nombre: 'hola',
        id: 1
      },
      {
        nombre: 'hola2',
        id: 2
      },
      {
        nombre: 'hola3',
        id: 3
      },
      {
        nombre: 'hola4',
        id: 4
      },
    ];
  }

  verDetalle(libro) {
    console.trace(libro);

    this.router.navigate(['detalle/' + libro.id]);
  }// verDetalle

}
