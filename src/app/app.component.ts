import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Decreament, Increament } from './store/actions/counter.action';
import { LoadTodosAction } from './store/actions/todos.action';
import { ToDo } from './store/reducers/todos.reducer';
import { nSelector } from './store/selectors/counter.selector';
import { titleSelector } from './store/selectors/todo.selector';
import {StoreInterface } from './store/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  count: number = 0;
  todos: ToDo[] = [];

  constructor(private store: Store<StoreInterface>) {
    this.store.select(nSelector).subscribe(data => this.count = data)
    this.store.subscribe(dat => this.todos=dat.todos) 
  }

  increase() {
    this.store.dispatch(new Increament(2));
  }

  decrease() {
    this.store.dispatch(new Decreament(2));
  }

  load(){
    this.store.dispatch(new LoadTodosAction)
  }
}
