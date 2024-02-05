import { Component } from '@angular/core';

import { PageTwoComponent } from './page-two.component';

@Component({
  selector: 'app-page-one',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>Page One</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-modal [isOpen]="true">
<ng-template>
  <ion-content>
    <button (click)="handleClick()">button</button>
  </ion-content>
</ng-template>
      </ion-modal>
    </ion-content>
  `,
})
export class PageOneComponent {
  component = PageTwoComponent;

  public handleClick() {
    console.log('click');
  }
}
