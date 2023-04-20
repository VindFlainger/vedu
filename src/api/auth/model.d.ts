import {UserGender, UserRole} from "../global";

export interface ReqDataSignIn {
    login: string,
    password: string,
    fingerprint: string
}


export interface ReqDataSignUpStudent {
    login: string,
    password: string,
    name: string,
    surname: string,
    gender: UserGender
}


export interface ReqDataSignUpInstructor {
    login: string,
    password: string,
    name: string,
    surname: string,
    gender: UserGender,
    disciplines: string[]
}


export interface ResSignIn {
    accessToken: string,
    refreshToken: string,
    role: UserRole,
    login: string,
    expiresIn: number,
    id: string
}