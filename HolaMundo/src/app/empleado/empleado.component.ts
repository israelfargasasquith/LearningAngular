import { Component } from "@angular/core";
import { Empleado } from "./empleado";

@Component({
    selector: "empleado",
    templateUrl: "./empleado.component.html"
})

export class EmpleadoComponent {
    public nombreComponente = "Componente Empleado";
    public jefe: Empleado;
    public trabajadores: Array<Empleado>;
    public mostrarJefe: boolean;

    constructor() {
        this.jefe = new Empleado("Israel", 24, 3000);
        this.trabajadores = [new Empleado("Pepe", 24, 3000), new Empleado("Alfonos", 24, 3000), new Empleado("Marta", 24, 3000)];
        this.mostrarJefe = true;
    }

    cambiarValorJefe() {
        this.mostrarJefe = !this.mostrarJefe;
    }
}