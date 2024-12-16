export interface IAuthData {
    usernameToLower: string;
    usernameCharacters: Array<string>;
    userDetails: Object | undefined;
    isAuthenticated: boolean;
}