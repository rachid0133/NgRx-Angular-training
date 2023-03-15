import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ToDo } from "../reducers/todos.reducer";

let todoFS = createFeatureSelector<ToDo>('todos')
export let titleSelector = createSelector(todoFS, state => state.title)
