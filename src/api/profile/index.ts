import {ResUserInfo} from './model'
import {useFetch} from "@/composables/useFetch";

enum URL {
    user_info = '/auth/getUserInfo'
}

const {getDataAuthed} = useFetch()

const user_info = async () => getDataAuthed<ResUserInfo>(URL.user_info)

export default {
    user_info
}