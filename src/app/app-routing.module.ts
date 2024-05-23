import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PantallaPrincipalComponent } from './Views/pantalla-principal/pantalla-principal.component';
import { BienvenidaComponent } from './Views/bienvenida/bienvenida.component';
import { PantallaPrediccionComponent } from './Views/pantalla-prediccion/pantalla-prediccion.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {path: 'Bienvenida', component:BienvenidaComponent},
  {path: 'PantallaPrincipal', component:PantallaPrincipalComponent},
  {path: 'PantallaPrediccion', component:PantallaPrediccionComponent},


  {path:'',pathMatch:'full',redirectTo:'Bienvenida'},

];
@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
