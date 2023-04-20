import {ResInfoInstructor} from './model'
import {useFetch} from "../../composables/useFetch";

enum URL {
    info_instructor = '/data/getInstructorInfo'
}

const {getDataAuthed} = useFetch()

const info_instructor = async ()=> getDataAuthed<ResInfoInstructor>(URL.info_instructor)

export default {
    info_instructor
}