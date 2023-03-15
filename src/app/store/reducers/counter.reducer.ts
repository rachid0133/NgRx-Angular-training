import { DECRAEMENT, INCRAEMENT } from "../actions/counter.action";


export interface Counter{
    n: number,
    changes: number
}

let initialState = {
    n: 0, 
    changes: 0
}


export function counterReducer(state = initialState, action: any) {
    switch (action.type) {
        case INCRAEMENT:
            return {
                ...state,
                n: state.n + action.payload
            }
        case DECRAEMENT:
            return {
                ...state,
                n: state.n - action.payload
            }
        default:
            return state;
    }
}

