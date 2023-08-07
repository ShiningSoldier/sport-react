export type MessageObjectType = {
    message: string;
    type: MessageTypes;
}

export enum MessageTypes {
    SUCCESS = "success",
    DANGER = "danger",
    WARNING = "warning",
    INFO = "info"
}