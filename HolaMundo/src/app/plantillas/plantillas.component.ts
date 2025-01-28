import { Component } from "@angular/core";

@Component({
    selector: 'plantillas',
    templateUrl: 'plantillas.component.html',
})

export class PlantillasComponent {

    public titulo: string;
    public administrador: boolean;

    constructor() {
        this.titulo = "Plantillas ngTemplate";
        this.administrador = true;
    }


    setAdminitrador() {
        this.administrador = !this.administrador;
    }


}