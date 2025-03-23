import { NgOptimizedImage } from "@angular/common";
import { Component } from "@angular/core";

@Component({
    selector: 'optimazedImage',
    template: `<img [ngSrc]="angularLogo" [alt]="imageAlt" height="200" width="200"> `,
    imports: [NgOptimizedImage],
})

export class optimazedImage {
    angularLogo = 'D:\Angular\Tutorial\src\assets\angular.svg';
    imageAlt = 'Myself in a mirror';
}