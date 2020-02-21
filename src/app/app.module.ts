import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './paginas/principal/principal.component';
import { DetalleComponent } from './paginas/detalle/detalle.component';
import { FormularioComponent } from './paginas/formulario/formulario.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { NumeroElementosPipe } from './pipes/numero-elementos.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    DetalleComponent,
    FormularioComponent,
    NavbarComponent,
    NumeroElementosPipe
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
