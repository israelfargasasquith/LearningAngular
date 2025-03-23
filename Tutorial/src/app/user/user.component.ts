import { Component, Input } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: 'app-user',
    template: `
    <form [formGroup]="profileForm" (ngSubmit)="handleSubmit()">

        <label>
            Name: 
            <input type="text" formControlName="name">
        </label>

        <label>
            Email: 
            <input type="email" formControlName="email">
        </label>

        <button type="submit" [disabled]="!profileForm.valid"> Submit</button>

    </form>

    <p>Name: {{ profileForm.value.name }} </p>
    <p>Email: {{ profileForm.value.email }} </p>
    <hr>
    <p>Username: {{username}}</p>
    <p>Framework: {{favoriteFramework}} </p>
    <label for="framework">
        Favourite framework: 
        <input id="framework" type="text"[(ngModel)]="favoriteFramework"/>
        <button (click)="showFramework()">Show Framework on alert</button>
        <br>
   <button (click)="greet()" text="hi">Hi</button>
   <div (mouseover)="onMouseOver()" (mouseleave)="onMouseLeaves()"> Change text of the tag: </div>
   <p> {{ text }}</p>
   <p >Xexy's job: {{ occupation}} </p>
    </label>
        <div> User page </div>
    `,
    imports: [FormsModule, ReactiveFormsModule],
})

export class UserComponent {

    profileForm = new FormGroup({
        name: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email]),
    });

    public favoriteFramework: String = "";
    username = "Israel";
    text = "Nothing at all";
    @Input() occupation = '';
    greet() {
        alert("Hello there");
    }
    onMouseOver() {
        this.text = "You got Hoverered";
    }
    onMouseLeaves() {
        this.text = "Bye... 😢";
    }
    showFramework() {
        alert(this.favoriteFramework);
    }
    handleSubmit() {
        alert(this.profileForm.value.name + ' | ' + this.profileForm.value.email);
    }
}
