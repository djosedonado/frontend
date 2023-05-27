import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ControlAccesoComponent } from './components/control-acceso/control-acceso.component';
import { RegistarPersonalComponent } from './components/registar-personal/registar-personal.component';
import { ListarPersonalComponent } from './components/listar-personal/listar-personal.component';

const routes: Routes = [
  {
    path: 'personal/listarPersonal',
    component: ListarPersonalComponent,
  },
  {
    path: 'personal/fromRegister',
    component: RegistarPersonalComponent,
  },
  {
    path: '',
    component: ControlAccesoComponent,
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
