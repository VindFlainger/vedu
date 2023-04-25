import {axiosPipeline} from "../utils/middleware/axios/axiosPipeline";
import {AlertAttitude, AlertType, useEventsStore} from "../store/modules/events";
import {AxiosRequestConfig, AxiosResponse, AxiosError} from "axios";

export interface FetchOptions {
    ignoreError?: boolean,
    handleSuccess?: boolean,
    successTitle?: string,
    successMessage?: string,
    needAuth?: boolean,
    errorCodeCallback?: (code: number) => void
}

export function useFetch() {
    const getFormatResponse = async <T = any>(request: Promise<AxiosResponse>, options: FetchOptions = {}): Promise<T> => {
        const events = useEventsStore()

        try {
            const response = await request


            if (options.handleSuccess) {
                events.addAlert({
                    type: AlertType.Success,
                    attitude: AlertAttitude.Request,
                    title: options.successTitle || 'Success',
                    message: options.successMessage,
                    timeout: 3000
                })
            }


            return response.data

        } catch (err) {

            if (err instanceof AxiosError) {
                if (!options.ignoreError) {
                    if (err.response?.data && err.response.data.code === 0) {
                        events.addAlert({
                            type: AlertType.Error,
                            attitude: AlertAttitude.Request,
                            title: '',
                            message: err.response.data.message,
                            timeout: 3000
                        })
                    }
                }
                if (options.errorCodeCallback && err.response?.data?.code) {
                    options.errorCodeCallback(err.response.data.code)
                }
            }

            throw err
        }
    }


    const getData = <T = any>(url: string, params?: Record<string, any>, axiosConfig?: AxiosRequestConfig, options?: FetchOptions): Promise<T> => {
        return getFormatResponse(
            axiosPipeline.get(url, {params, needAuth: options?.needAuth, ...axiosConfig} as AxiosRequestConfig),
            options
        )
    }

    const getDataAuthed = <T = any>(url: string, params?: Record<string, any>, axiosConfig?: AxiosRequestConfig, options?: FetchOptions): Promise<T> => {
        return getData(url, params, axiosConfig, {needAuth: true, ...options})
    }


    const postData = <T = any>(url: string, data?: any, axiosConfig?: AxiosRequestConfig, options?: FetchOptions): Promise<T> => {
        return getFormatResponse(
            axiosPipeline.post(url, data, {needAuth: options?.needAuth, ...axiosConfig} as AxiosRequestConfig),
            options
        )
    }


    const postDataAuthed = <T = any>(url: string, data?: any, axiosConfig?: AxiosRequestConfig, options?: FetchOptions): Promise<T> => {
        return postData(url, data, axiosConfig, {needAuth: true, ...options})
    }

    return {
        getData,
        getDataAuthed,
        postData,
        postDataAuthed
    }
}
