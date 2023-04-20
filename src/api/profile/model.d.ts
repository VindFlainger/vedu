import {UserGender} from "../global";

interface ResInfoInstructorImage {
    width: number,
    image: {
        file: string,
        name: string,
        size: number,
        url: string
    }
}

export interface ResInfoInstructor {
    name: string,
    surname: string,
    gender: UserGender,
    avatar: ResInfoInstructorImage[]
}