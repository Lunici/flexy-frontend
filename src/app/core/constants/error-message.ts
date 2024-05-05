import {Message} from "primeng/api";

export class ErrorMessage {
    public static readonly UNKNOWN: string = 'Unknown Error';
    public static readonly USER_OR_PASSWORD_INCORRECT: string = 'The user ID or password is wrong';
    public static readonly PASSWORDS_NOT_MATCHED: string = 'The passwords are not matched';
    public static readonly USER_ID_DUPLICATED: string = 'The user ID already exists';
}