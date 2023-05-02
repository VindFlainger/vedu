import {ReqParamsDisciplines, ResDisciplines} from "./model";
import {useFetch} from "@/composables/useFetch";
import {ReqGet} from "../global";

const {getData} = useFetch()

enum URL {
    disciplines = '/data/getDisciplines'
}

const disciplines = async (config: ReqGet<ReqParamsDisciplines>) => getData<ResDisciplines>(URL.disciplines, config.params, config.axiosConfig, config.options)


export default {
    disciplines
}