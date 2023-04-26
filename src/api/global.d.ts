import {AxiosRequestConfig} from "axios";
import {FetchOptions} from "../composable/useFetch";

export enum Codes {
    success = 1
}

export enum UserPrivilege {
    None,
    Extended,
    Advanced,
    AdvancedPlus
}

export enum UserGender {
    Male = 1,
    Female = 2
}

export enum UserRole {
    None,
    Student,
    Instructor
}

export interface ResSuccess {
    code: Codes.success,
    success: boolean
}

interface Req {
    axiosConfig?: AxiosRequestConfig,
    options?: FetchOptions
}

export interface ReqGet<T = undefined> extends Req {
    params?: T
}

export interface ReqPost<T> extends Req {
    data?: T
}
