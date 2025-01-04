import { Component } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";


@Component({
    selector: 'contacto',
    templateUrl: 'contacto.component.html'
})

export class ContactoComponent {
    public titulo: string = "Página de contacto";
    public parametro: any;
    constructor(
        private _route: ActivatedRoute,
        private _router: Router
    ) { }

    ngOnInit() {
        this._route.params.forEach((params: Params) => {
            this.parametro = params['page'];
        })
    }

    conParametro() {
        this._router.navigate(['/contacto', 'Usuario']);
    }
}
