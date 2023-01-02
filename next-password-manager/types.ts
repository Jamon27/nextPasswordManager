export interface ISecret {
    "webSite": IWebSite;
    "userInfo": IUserInfo;
}

export interface IWebSite {
    "name": string;
}

export interface IUserInfo{
    "login": string;
    "password": string;
}