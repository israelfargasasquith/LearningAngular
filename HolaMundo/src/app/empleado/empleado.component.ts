import { Component } from "@angular/core";

@Component({
    selector: "empleado",
    templateUrl: "./empleado.component.html"
})

export class Empleado {
    public nombreComponente = "empleado";
    public listaEmpleados = "Pepe, Juan, Maria";
}