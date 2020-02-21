import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NoticiasService } from 'src/app/services/noticias.service';
import { Noticia } from 'src/app/model/noticia';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup;

  constructor(private router : Router ,
              private builder : FormBuilder,
              private noticiasService: NoticiasService) {
                this.formulario = this.builder.group({
                  titulo: ['', [Validators.required]],
                  imagen: ['', [Validators.required]],
                  fecha: ['', [Validators.required]],
                  textoCorto: ['', [Validators.required]],
                  texto: ['', [Validators.required]]
                });
  }//constructor

  ngOnInit() {

  }//ngOnInit

  enviar(values : any)
    {
      //debugger;
      console.trace('Soy el metodo enviar del formularioComponent');
      console.trace('Enviar formulario %o', values);

      let noticia = new Noticia();
      noticia.id = values.id;
      noticia.titulo = values.titulo;
      noticia.textoCorto = values.textoCorto;
      noticia.texto = values.texto;
      noticia.imagen = values.imagen;

      noticia.fecha = values.fecha;

      this.noticiasService.post(noticia).subscribe(
        dato => {
          console.debug('Vengo de hacer el post y traigo %o', dato);
          this.router.navigate(['']);
        }
      )

  }//enviar

}//FormularioComponent
