import {Message} from "primeng/api";
import {Severity} from "../constants/severity";
import {ErrorMessage} from "../constants/error-message";

export class MessageUtil {
    public static getStickyErrorMessage(detail: string): Message {
        return {severity: Severity.ERROR, summary: 'Oh No!', detail: detail, sticky: true};
    }

    public static getStickyInfoMessage(detail: string): Message {
        return {severity: Severity.INFO, summary: '', detail: detail, sticky: true};
    }

    public static getStickyUnknownErrorMessage(): Message {
        return this.getStickyErrorMessage(ErrorMessage.UNKNOWN);
    }
}
