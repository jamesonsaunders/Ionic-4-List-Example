import { Component, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  items = ['apple', 'banana', 'cherry'];

  test() {
    console.log('my test works');
  }

  delete(i) {
    console.log('my delete works');
    this.items.splice(i, 1);
  }
}
