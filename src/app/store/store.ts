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

const INCRAEMENT = 'increament';
const DECRAEMENT = 'decreament';


export function counterReducer(state = initialState, action: any) {
    switch (action.type) {
        case INCRAEMENT:
            return {
                n: state.n + action.payload
            }
        case DECRAEMENT:
            return {
                n: state.n - action.payload
            }
        default:
            return state;
    }
}

export class Increament{
    type: string = INCRAEMENT;
    payload: number;

    constructor(payload: number){
        this.payload = payload;
    }
}

export class Decreament{
    type: string = DECRAEMENT;
    payload: number;

    constructor(payload: number){
        this.payload = payload;
    }
}