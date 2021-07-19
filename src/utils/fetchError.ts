import {IFetchError} from 'src';

export class FetchError implements IFetchError {
    name = 'FetchError';
    message: string;
    status: number;
    statusText: string | undefined;
    body: ReadableStream<Uint8Array> | null | undefined;
    constructor(status: number, msg: string, statusText?: string, body?: ReadableStream<Uint8Array> | null) { 
        this.message = msg;
        this.status = status;
        this.statusText = statusText;
        this.body = body;
        Object.setPrototypeOf(this, new.target.prototype); // sets prototype explicitly (FetchError.Prototype)
    }
}
