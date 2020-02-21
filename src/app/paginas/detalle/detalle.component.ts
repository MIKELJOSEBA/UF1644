import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoticiasService } from 'src/app/services/noticias.service';
import { Noticia } from 'src/app/model/noticia';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {

  id: number;
  noticia: Noticia;
  constructor(private route: ActivatedRoute, private noticiasService: NoticiasService) {
    this.id = 0;

    this.route.params.subscribe(
      params =>
      {
        this.id = params.id;
        this.noticiasService.getById(this.id).subscribe(
          noticia => {
            this.noticia = noticia;
          }
        )
      });
  }

  ngOnInit() {
  }

}
