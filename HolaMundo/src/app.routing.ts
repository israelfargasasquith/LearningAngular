import { ModuleWithProviders, Provider } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { EmpleadoComponent } from "./app/empleado/empleado.component";
import { FrutaComponent } from "./app/fruta/fruta.component";
import { HomeComponent } from "./app/home/home.component";
import { ContactoComponent } from "./app/contacto/contacto.component";
import { AppModule } from "./app/app.module";
import { CochesComponent } from "./app/coches/coches.component";
import { PlantillasComponent } from "./app/plantillas/plantillas.component";

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'empleado', component: EmpleadoComponent },
    { path: 'fruta', component: FrutaComponent },
    { path: 'coches', component: CochesComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: 'contacto/:page', component: ContactoComponent },
    { path: 'plantillas', component: PlantillasComponent },
    { path: '**', component: HomeComponent }
]

export const apprRoutingProviders: any[] = [];

export const routing: ModuleWithProviders<AppModule> = RouterModule.forRoot(appRoutes);

