import { Injectable } from "@angular/core";


@Injectable()
export class RopaService {

    public nombre: string = 'pantalones vaqueros';
    public coleccionRopa: Array<string> = ['Camiseta nike', 'Camisa scalpers'];


    prueba() {
        return this.nombre;
    }

    addRopa(ropa: string) {
        this.coleccionRopa.push(ropa);
    }

    getRopa() {
        console.log("Toda la ropa:")
        this.coleccionRopa.forEach(element => {
            console.log(element)
        });
        return this.coleccionRopa;
    }

    deleteRopa(index: number) {
        this.coleccionRopa.splice(index, 1);
    }

}