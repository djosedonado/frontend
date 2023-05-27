import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ControlAccesoComponent } from './components/control-acceso/control-acceso.component';
import { RegistarPersonalComponent } from './components/registar-personal/registar-personal.component';
import { ListarPersonalComponent } from './components/listar-personal/listar-personal.component';
import { HeaderComponent } from './header/header.component';
import { ToastrModule, provideToastr } from 'ngx-toastr';
import {
  BrowserAnimationsModule,
  provideAnimations,
} from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { EditarPersonalComponent } from './components/editar-personal/editar-personal.component';

@NgModule({
  declarations: [
    AppComponent,
    ControlAccesoComponent,
    RegistarPersonalComponent,
    ListarPersonalComponent,
    HeaderComponent,
    EditarPersonalComponent,
  ],
  imports: [
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
  ],
  providers: [provideAnimations(), provideToastr()],
  bootstrap: [AppComponent],
})
export class AppModule {}
