export interface MessageType {
    id: string | number,
    content: string,
    user: string | boolean,
    first: boolean,
    last: boolean,
}