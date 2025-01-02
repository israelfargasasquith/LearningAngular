import { Component } from '@angular/core';

@Component({
    selector: 'fruta',
    templateUrl: './fruta.component.html'
})

export class FrutaComponent {
    public nombreComponente: string;
    public listadoFrutas: Array<string>;
    private numeroDeFrutas: number;

    constructor() {
        this.nombreComponente = "Componente de fruta";
        this.listadoFrutas = ["Naranja", "Manzana", "Kiwi"];
        this.numeroDeFrutas = this.listadoFrutas.length;
    }

    ngOnInit() {
        this.holaMundo("Isra");
    }

    holaMundo(nombre: string) {
        //alert("Hola Mundo " + nombre);
    }
}

