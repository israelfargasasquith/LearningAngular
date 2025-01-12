import { Component } from "@angular/core";
import { Coche } from "./coches";

@Component({
    selector: 'coches',
    templateUrl: 'coches.component.html'
})

export class CochesComponent {

    public coche: Coche;

    constructor() {
        this.coche = new Coche("Toyota Corola", "1000", "Black");
    }

    onSubmmit() {
        console.log(this.coche);
    }

}