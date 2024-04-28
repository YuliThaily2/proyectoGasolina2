import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PantallaPrincipalComponent } from './Views/pantalla-principal/pantalla-principal.component';
import { BienvenidaComponent } from './Views/bienvenida/bienvenida.component';

const routes: Routes = [
  {path: 'Bienvenida', component:BienvenidaComponent},
  {path: 'PantallaPrincipal', component:PantallaPrincipalComponent},


  {path:'',pathMatch:'full',redirectTo:'PantallaPrincipal'},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
