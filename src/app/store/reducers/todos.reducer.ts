import { FAILED, SUCCESS } from "../actions/todos.action"

export interface ToDo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

export function TodosReducer(state: ToDo[] | undefined, action: any) {
    switch (action.type) {
        case SUCCESS:
            return action.payload
        case FAILED:
            return state
    }
}