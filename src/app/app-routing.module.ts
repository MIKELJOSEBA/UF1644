import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './paginas/principal/principal.component';
import { DetalleComponent } from './paginas/detalle/detalle.component';
import { FormularioComponent } from './paginas/formulario/formulario.component';


const routes: Routes = [
  { path: 'formulario', component: FormularioComponent },
  { path: 'detalle/:id', component: DetalleComponent },
  { path: '', component: PrincipalComponent },
];

export const RUTAS = [
  {
    url: '/',
    nombre: 'inicio'
  },
  {
    url: 'formulario',
    nombre: 'formulario'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
