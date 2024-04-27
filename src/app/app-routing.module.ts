import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PantallaPrincipalComponent } from './Views/pantalla-principal/pantalla-principal.component';

const routes: Routes = [
  {path: 'PantallaPrincipal', component:PantallaPrincipalComponent},


  {path:'',pathMatch:'full',redirectTo:'PantallaPrincipal'},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
