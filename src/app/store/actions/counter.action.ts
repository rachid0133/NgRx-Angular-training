
export const INCRAEMENT = '[Counter] increament';
export const DECRAEMENT = '[Counter] decreament';

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