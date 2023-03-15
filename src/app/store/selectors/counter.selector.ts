import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Counter } from "../reducers/counter.reducer";

let counterFS = createFeatureSelector<Counter>('counter')
export let nSelector = createSelector(counterFS, state=>state.n)