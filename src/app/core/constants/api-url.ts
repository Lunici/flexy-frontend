export class ApiUrl {

    private constructor() {
    }

    public static readonly backendServer: string = 'http://127.0.0.1:8080';
    public static readonly post: string ='/post';
    public static readonly allPosts: string = ApiUrl.post + '/all';
    public static readonly byAuthor: string = '/byAuthor';
    public static readonly byProfile: string = '/byProfile';
    public static readonly allPostsByProfile: string = ApiUrl.allPosts + ApiUrl.byProfile;
}