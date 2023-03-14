import { Action, ActionReducerMap } from "@ngrx/store";
import { Counter, counterReducer } from "./reducers/counter.reducer";

export interface StoreInterface{
    counter: Counter
}


export const reducers: ActionReducerMap<StoreInterface> = {counter: counterReducer}