
export class HttpResponse<VIEW> {
    status: number;
    message: string;
    token: string;
    data: VIEW;

    constructor(status: number, message: string, token: string, data: VIEW) {
        this.status = status;
        this.message = message;
        this.token = token;
        this.data = data;
    }
}