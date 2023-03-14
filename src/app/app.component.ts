import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Decreament, Increament, StoreInterface } from './store/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  count: number = 0;

  constructor(private store: Store<StoreInterface>) {
    this.store.subscribe(data => this.count = data.counter.n)
  }

  increase() {
    this.store.dispatch(new Increament(2));
  }

  decrease() {
    this.store.dispatch(new Decreament(2));
  }
}
