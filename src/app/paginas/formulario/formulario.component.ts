import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  constructor(private router : Router , 
              private builder : FormBuilder,) { 


  }//constructor

  ngOnInit() {

  }//init

  enviar(values : any)
    { 
      //debugger;
      console.trace('Soy el metodo enviar del formularioComponent');
      console.trace('Enviar formulario %o', values);


  }//enviar

}//class
