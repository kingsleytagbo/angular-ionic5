export class Authentication{
    isAuthenticated:boolean;
    constructor(isAuthenticated?:boolean){
        this.isAuthenticated : isAuthenticated ? isAuthenticated : false;
    }
}