import {UserGender, UserPrivilege, UserRole} from "../global";

interface ResUserInfoImage {
    width: number,
    image: {
        file: string,
        name: string,
        size: number,
        url: string
    }
}


export interface ResUserInfo {
    name: string,
    surname: string,
    privilege: UserPrivilege,
    role: UserRole,
    gender: UserGender,
    avatar: ResUserInfoImage[]
}