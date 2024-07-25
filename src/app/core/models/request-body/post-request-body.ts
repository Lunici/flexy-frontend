export class GetAllPostsRequestBody {
    authorNum: number;

    constructor(authorNum: number) {
        this.authorNum = authorNum;
    }
}