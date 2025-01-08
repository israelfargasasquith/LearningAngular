import { Component } from "@angular/core";
import { RopaService } from "../services/ropa.service";

@Component({
    selector: 'home',
    templateUrl: 'home.component.html',
    providers: [RopaService]
})

export class HomeComponent {
    public titulo: string = "Página principal";
    public coleccionRopa: Array<string> = [''];
    public prendaAGuardar: string = "";
    public fecha: Date = new Date();
    constructor(
        private _ropaService: RopaService,
    ) { }

    ngOnInit() {
        //window.alert(this._ropaService.prueba());
        console.log(this._ropaService.prueba());
        this.coleccionRopa = this._ropaService.getRopa();
        console.log(this.coleccionRopa);
    }

    nuevaPrenda() {
        if (this.prendaAGuardar) {
            this._ropaService.addRopa(this.prendaAGuardar);
        } else {
            window.alert("La prenda no puede ser un string vacio");
        }
        this.prendaAGuardar = "";
    }

    eliminarPrenda(index: number) {
        this._ropaService.deleteRopa(index);
    }
}
