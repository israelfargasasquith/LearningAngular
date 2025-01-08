import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { routing, apprRoutingProviders } from 'src/app.routing';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrutaComponent } from './fruta/fruta.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { HomeComponent } from "./home/home.component";
import { ContactoComponent } from "./contacto/contacto.component";
import { ConversorPipe } from './pipes/conversor.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FrutaComponent,
    EmpleadoComponent,
    HomeComponent,
    ContactoComponent,
    ConversorPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    routing

  ],
  providers: [apprRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
