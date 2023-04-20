import {ReqDataSignIn, ReqDataSignUpInstructor, ReqDataSignUpStudent, ResSignIn} from './model'
import {useFetch} from "../../composables/useFetch";
import {ReqPost, ResSuccess} from "../global";

enum URL {
    sign_in = '/auth/login',
    sign_up_student = '/auth/registerStudent',
    sign_up_instructor = '/auth/registerInstructor'
}

const {postData} = useFetch()

const sign_in = async (config: ReqPost<ReqDataSignIn>) => postData<ResSignIn>(URL.sign_in, config.data, config.axiosConfig, config.options)
const sign_up_student = async (config: ReqPost<ReqDataSignUpStudent>) => postData<ResSuccess>(URL.sign_up_student, config.data, config.axiosConfig, config.options)
const sign_up_instructor = async (config: ReqPost<ReqDataSignUpInstructor>) => postData<ResSuccess>(URL.sign_up_instructor, config.data, config.axiosConfig, config.options)

export default {
    sign_in,
    sign_up_student,
    sign_up_instructor
}