import { Component, inject } from "@angular/core";
import { CarService } from '../services/car.service';
import { UpperCasePipe, LowerCasePipe, DatePipe, DecimalPipe } from "@angular/common";
import { ReversePipe } from "../pipes/reverse.pipe";

@Component({
    selector: 'app-home',
    template: `
    <div> Hello reversed is: {{ word | reverse}} </div>
    <div> Date now:  {{ date | date:'medium' }}</div>
    <div> Number with "decimal" {{ num | number:"3.2-4" }}</div>
        <div>Pipe example {{ loudExpression | uppercase  | lowercase}}</div>
        <div> Home page </div>
        <p> Car list: {{ display }} </p>
    `,
    imports: [UpperCasePipe, LowerCasePipe, DatePipe, DecimalPipe, ReversePipe]
})

export class HomeComponent {
    word = "Hello";
    loudExpression = "hoLIiiIIIiiii!"
    carService = inject(CarService);
    display = "";
    num = 423.141522;
    date = Date();
    constructor() {
        this.display = this.carService.getCars().join(' 🍄 ');
    }

}