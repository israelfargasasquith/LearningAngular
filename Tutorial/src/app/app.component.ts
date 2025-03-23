import { Component, Input } from '@angular/core';
import { UserComponent } from './user/user.component';
import { ChildComponent } from "./child.component";
import { optimazedImage } from './optimazedImage.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
  <nav>
    <a routerLink="/">Home</a>
    <br>
    <a routerLink="/user">User</a>
  </nav>
  <router-outlet/>
  <optimazedImage/>
  @defer (on viewport){
    <article>
  <p>Angular is my favorite framework, and this is why. Angular has the coolest deferrable view feature that makes defer loading content the easiest and most ergonomic it could possibly be. The Angular community is also filled with amazing contributors and experts that create excellent content. The community is welcoming and friendly, and it really is the best community out there.</p>
  </article>
} @placeholder {
  <p>Future comments</p>
} @loading (minimum 2s) {
  <p>Loading comments...</p>
}
  <section>
    <app-child (addItemEvent)="addItem($event)" />
    <p>🐢 all the way down {{ items.length }}</p>
    <!-- <app-user occupation="femboy"/> -->
    <br>
    <div [contentEditable]="isEditable">placeHolder</div>
    <br>
    @if (isServerRunning){
       Yes the server is running
    }@else{
      No the server is down
    }
    <br>
    <br>
          users names:

    @for (user of users; track user.id){
        <p>{{ user.name }}</p>
    }    
</section>
  `,
  imports: [UserComponent, ChildComponent, optimazedImage, RouterOutlet, RouterLink]
})

export class AppComponent {
  items = new Array();
  addItem(item: string) {
    this.items.push(item);
  }

  isEditable = true;
  isServerRunning = false;
  users = [{ id: 0, name: 'Sarah' }, { id: 1, name: 'Amy' }, { id: 2, name: 'Rachel' }, { id: 3, name: 'Jessica' }, { id: 4, name: 'Poornima' }];

}