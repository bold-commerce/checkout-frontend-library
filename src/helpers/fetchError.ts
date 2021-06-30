import {IFetchError} from '../types';

export class FetchError implements IFetchError {
    name = 'FetchError'
    message
    status
    statusText
    body
    constructor(status: number, msg: string, statusText?: string, body?: ReadableStream<Uint8Array> | null) { 
        this.message = msg;
        this.status = status;
        this.statusText = statusText;
        this.body = body;
        Object.setPrototypeOf(this, new.target.prototype); // sets prototype explicitly (FetchError.Prototype)
    }
}