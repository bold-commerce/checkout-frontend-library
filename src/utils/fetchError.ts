import {IApiResponse, IFetchError} from 'src';

export class FetchError implements IFetchError {
    name = 'FetchError';
    message: string;
    status: number;
    statusText: string | undefined;
    body: string | IApiResponse | null | undefined;
    metaData: Record<string, unknown> | null | undefined;
    constructor(status: number, msg: string, statusText?: string, body?: string | IApiResponse | null | undefined, metaData?: Record<string, unknown>) {
        this.message = msg;
        this.status = status;
        this.statusText = statusText;
        this.body = body;
        this.metaData = metaData;
        Object.setPrototypeOf(this, new.target.prototype); // sets prototype explicitly (FetchError.Prototype)
    }
}
