import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PantallaPrincipalComponent } from './Views/pantalla-principal/pantalla-principal.component';
import { FormsModule } from '@angular/forms';
import { BienvenidaComponent } from './Views/bienvenida/bienvenida.component';

@NgModule({
  declarations: [
    AppComponent,
    PantallaPrincipalComponent,
    BienvenidaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
