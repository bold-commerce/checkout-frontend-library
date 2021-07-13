export interface IFetchError extends Error {
    status: number;
    statusText: string | undefined;
    body: ReadableStream<Uint8Array> | null | undefined;
}

interface IFetchErrorConstructor extends ErrorConstructor {
    new(status: number, msg: string, statusText?: string, body?: ReadableStream<Uint8Array> | null): IFetchError;
    (status: number, msg: string, statusText?: string, body?: ReadableStream<Uint8Array> | null): IFetchError;
}

declare let IFetchError: IFetchErrorConstructor; 