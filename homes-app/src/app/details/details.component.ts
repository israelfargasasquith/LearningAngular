import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housing-location';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <article>
      <img class="listing-photo" [src]="housingLocation?.photo">
      <section class="listing-descrition">
        <h2 class="listing-heading">{{housingLocation?.name}}</h2>
        <p class="listing-location"> {{housingLocation?.city}}, {{housingLocation?.state}}</p>
      </section>
      <section class="listing-features">
        <h2 class="section-heading">About this housing location</h2>
        <ul>
          <li>Units aviable: {{housingLocation?.availableUnits}}</li>
          <div *ngIf="housingLocation?.wifi; then hasWifi else noWifi"></div>
          <ng-template #hasWifi><li >Does this location has wi-fi? ✅</li></ng-template>
          <ng-template #noWifi><li >Does this location has wi-fi? ❌</li></ng-template>
          <div *ngIf="housingLocation?.wifi; then hasLaundry else noLaundry"></div>
          <ng-template #hasLaundry><li >Does this location has laundry? ✅</li></ng-template>
          <ng-template #noLaundry><li >Does this location has laundry? ❌</li></ng-template>
        </ul>
      </section>
      <section class="listing-apply">
          <h2 class="section-heading"> Apply now to live here </h2>
          <form [formGroup]="applyForm" (submit)="submitApplication()">
            <label for="first-name">First Name</label>
            <input id="first-name" type="text" placeholder="John" formControlName="firstName" >

            <label for="last-name">Last Name</label>
            <input id="last-name" type="text" placeholder="Doe" formControlName="lastName">

            <label for="email">Email</label>
            <input id="email" type="email" placeholder="example@email.com" formControlName="email">
            <button type="submit" class="primary">Apply now!</button>
          </form>
      </section>
    </article>
  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  })
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;
  constructor() {
    const housingLocationID = Number(this.route.snapshot.params['id'])
    this.housingService.getHousingLocationById(housingLocationID).then(housingLocation => {
      this.housingLocation = housingLocation;
    })
  }
  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? '',
    )
  }
}
