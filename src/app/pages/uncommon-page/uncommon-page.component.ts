import { Component, signal } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import {
  AsyncPipe,
  I18nPluralPipe,
  I18nSelectPipe,
  JsonPipe,
  KeyValuePipe,
  SlicePipe,
  TitleCasePipe,
} from '@angular/common';
import { interval, tap } from 'rxjs';

const client1 = {
  name: 'john merz',
  gender: 'male',
  age: '31',
  address: 'medellin, colombia',
};

const client2 = {
  name: 'mary popkins',
  gender: 'female',
  age: '31',
  address: 'hamburg, germany',
};

@Component({
  selector: 'app-uncommon-page',
  imports: [
    CardComponent,
    I18nSelectPipe,
    I18nPluralPipe,
    SlicePipe,
    JsonPipe,
    KeyValuePipe,
    TitleCasePipe,
    AsyncPipe,
  ],
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css',
})
export class UncommonPageComponent {
  // i18n select:
  client = signal(client1);

  addressingMap = {
    male: 'Mr.',
    female: 'Ms.',
  };

  changeClient() {
    if (this.client() === client1) {
      this.client.set(client2);
      return;
    }
    this.client.set(client1);
  }

  // i18plural pipe
  clients = signal(['jeff', 'maria', 'carl', 'pedro', 'john', 'kate']);

  clientsMap = {
    '=0': 'we dont have any clients currently waiting',
    '=1': 'we have a client waiting',
    other: 'we have # clients currently waitng',
  };
  deleteClient() {
    this.clients.update((prev) => {
      return prev.slice(1);
    });
  }

  profile = {
    name: 'John',
    age: 31,
    address: 'Hamburg, Germany',
  };

  promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('we have data inside promise');
      console.log('promise has been resolved');
    }, 3500);
  });

  myObservableTimer = interval(2000).pipe(
    tap((value) => {
      console.log('tap:', value);
    })
  );
}
