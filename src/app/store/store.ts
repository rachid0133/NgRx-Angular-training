import { Action } from "@ngrx/store";

let initialState = {
    n: 0
}


export function counterReduser(state = initialState, action: Action) {
    switch (action.type) {
        case "increament":
            return {
                n: state.n + 1
            }
        case "decreament":
            return {
                n: state.n - 1
            }
        default:
            return state;
    }
}