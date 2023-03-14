import { DECRAEMENT, INCRAEMENT } from "../actions/counter.action";


export interface Counter{
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

