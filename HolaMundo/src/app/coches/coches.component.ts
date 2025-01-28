import { Component } from "@angular/core";
import { Coche } from "./coches";
import { PeticionesService } from "../services/peticiones.service";

@Component({
    selector: 'coches',
    templateUrl: 'coches.component.html',
    providers: [PeticionesService]
})

export class CochesComponent {

    public coche: Coche;
    public coches: Array<Coche>;
    public articulos: any;

    constructor(private _peticionesService: PeticionesService) {

        this.coche = new Coche("", "", "");
        this.coches = [];
        this.coches.push(new Coche("Toyota Corola", "1000", "Black"));
        this.coches.push(new Coche("Seat Panda", "420", "Pink"));
    }

    ngOnInit() {
        console.log(this._peticionesService.getArticulos().subscribe(
            result => {
                console.log(result);
                this.articulos = result;
                if (!this.articulos) {
                    console.log("error en el servidor");
                }
            },
            error => {
                var errorMessage = <any>error;
                console.log(errorMessage);
            }
        ));
    }

    onSubmmit() {
        console.log(this.coche);
        let nuevoCoche = new Coche(this.coche.nombre, this.coche.caballos, this.coche.color);
        this.coches.push(nuevoCoche);

    }

}