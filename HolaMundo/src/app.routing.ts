import { ModuleWithProviders, Provider } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { EmpleadoComponent } from "./app/empleado/empleado.component";
import { FrutaComponent } from "./app/fruta/fruta.component";
import { HomeComponent } from "./app/home/home.component";
import { ContactoComponent } from "./app/contacto/contacto.component";
import { AppModule } from "./app/app.module";

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'empleado', component: EmpleadoComponent },
    { path: 'fruta', component: FrutaComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: 'contacto/:page', component: ContactoComponent },
    { path: '**', component: HomeComponent }
]

export const apprRoutingProviders: any[] = [];

export const routing: ModuleWithProviders<AppModule> = RouterModule.forRoot(appRoutes);

