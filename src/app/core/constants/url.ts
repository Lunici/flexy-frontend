import {decl} from "postcss";

export class Url {

    private constructor() {
    }

    public static readonly SEPARATOR: string = '/';
    public static readonly PARAM_SEPARATOR: string = '/:';

    public static readonly LOGIN: string = 'login';
    public static readonly LOGOUT: string = 'logout';
    public static readonly HOME: string = '/';
    public static readonly SIGNUP: string = 'signup';
    public static readonly USER: string = 'user';
    public static readonly PROFILE: string = 'profile';
    public static readonly EXPLORE: string = 'explore';
    public static readonly SETTINGS: string = 'settings';
    public static readonly ERROR: string = 'error';
    public static readonly NOT_FOUND: string = 'not-found';

    // POST
    public static readonly POST: string ='post';
}