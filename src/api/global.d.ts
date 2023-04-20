import {AxiosRequestConfig} from "axios";
import {FetchOptions} from "../composable/useFetch";

export enum Codes {
    success = 1
}


export enum UserRole {
    Student = 1,
    Instructor = 2
}


enum UserGender {
    Male = 1,
    Female = 2
}


export interface ResSuccess {
    code: Codes.success,
    success: boolean
}

interface Req {
    axiosConfig?: AxiosRequestConfig,
    options?: FetchOptions
}

export interface ReqGet<T> extends Req{
    params?: T
}

export interface ReqPost<T> extends Req{
    data?: T
}
