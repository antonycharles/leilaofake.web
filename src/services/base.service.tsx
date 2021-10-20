import IErroDefault from "interfaces/erro.default";
import dados from "../dados.json"
import axios, { AxiosInstance } from "axios";
import { autenticadoModel } from "../models/autenticado.model";

export const baseService = {
    defaultErro,
    getApi
};

function getApi(): AxiosInstance {
    let api = axios.create({
        baseURL: dados.api_url
    });

    const autenticado = autenticadoModel.userAutenticado();

    if(autenticado.authenticated)
        api.defaults.headers.common = { 'Authorization': `bearer ${autenticado.accessToken}` };

    return api;
}

function defaultErro(error: any): IErroDefault {
    return {
        code: error.response.data.code,
        message: error.response.data.message,
        details: error.response.data.details,
        innerError: error.response.data.innerError
    }
}