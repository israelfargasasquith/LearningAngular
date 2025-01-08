import { Pipe, PipeTransform } from '@angular/core'

@Pipe({ name: 'conversor' })
export class ConversorPipe implements PipeTransform {
    transform(value: number, factor: number) {
        let value_one: number = Math.floor(value);
        let value_two: number = Math.floor(factor);
        let result: number = Math.floor(value_one * value_two);

        return ("La multiplicacion de " + value_one + " X " + value_two + " = " + result);
    }
}