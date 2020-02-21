import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NoticiasService } from 'src/app/services/noticias.service';
import { ThrowStmt } from '@angular/compiler';
import { Noticia } from 'src/app/model/noticia';
import { NOTICIAS } from 'src/app/mock';





@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  lista: Array<Noticia>;

  constructor(private router: Router, private noticiasService: NoticiasService) {
    this.lista = new Array<any>();

  }

  ngOnInit() {
    this.lista = new Array<Noticia>();

    this.noticiasService.getAll().subscribe(
      noticias => {
        this.lista = noticias;
      }
    )
  }

  verDetalle(libro) {
    console.trace(libro);

    this.router.navigate(['detalle/' + libro.id]);
  }// verDetalle

cargarNoticias() {
  let noticias = NOTICIAS;

  let notis = noticias.page.items.map(
    el => {
      let noticia = new Noticia();

      noticia.titulo = el.title;
      noticia.imagen = el.image;
      noticia.textoCorto = el.summary;
      noticia.texto = el.text;
      noticia.fecha = el.publicationDate;

      return noticia;



    }
  );

  notis.forEach(
    el => console.log(el)
  )



}// cargarNoticias()

}
