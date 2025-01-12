import { Component } from "@angular/core";
import { Coche } from "./coches";

@Component({
    selector: 'coches',
    templateUrl: 'coches.component.html'
})

export class CochesComponent {

    public coche: Coche;
    public coches: Array<Coche>;

    constructor() {
        this.coche = new Coche("", "", "");
        this.coches = [];
        this.coches.push(new Coche("Toyota Corola", "1000", "Black"));
        this.coches.push(new Coche("Seat Panda", "420", "Pink"));
    }

    onSubmmit() {
        console.log(this.coche);
        this.coches.push(this.coche);
    }

}