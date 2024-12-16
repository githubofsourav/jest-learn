import { IAuthData } from "./authData";

export function product(a: number, b: number): number {
  return a * b;
}

export function authenticateUser(
  username: string,
  password: string
): IAuthData {
  const authStatus = username === "deveLOPER" && password === "dev";

  return {
    usernameToLower: username.toLowerCase(),
    usernameCharacters: username.split(""),
    userDetails: {},
    isAuthenticated: authStatus,
  };
}

export function usernameToLowerCase(username: string): string {
  return username.toLowerCase();
}
/* istanbul ignore next */
export class UsernameToLowerCase {
  public toLower(username: string) {
    if (username === "") {
      throw new Error("Invalid username!");
    }

    return username.toLowerCase();
  }
}
