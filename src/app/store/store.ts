import { Action } from "@ngrx/store";

export interface StoreInterface{
    counter: Counter
}

interface Counter{
    n: number
}

let initialState = {
    n: 0
}

// interface CutomAction{
//     type:string,
//     payload:any
// }


export function counterReducer(state = initialState, action: any) {
    switch (action.type) {
        case "increament":
            return {
                n: state.n + action.payload
            }
        case "decreament":
            return {
                n: state.n - action.payload
            }
        default:
            return state;
    }
}