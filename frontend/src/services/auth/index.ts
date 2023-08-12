import {apiAuthInstance} from "../../contants.ts";
import {
    TLoginError,
    TLoginForm,
    TLoginResponse,
    TRegistrationError,
    TRegistrationForm,
    TRegistrationResponse
} from "../../types/auth.ts";
import {AxiosError, isAxiosError} from "axios";
import {TokenService} from "../token";

export class AuthService{
    static async login(form: TLoginForm): Promise<{error: null, data: TLoginResponse } | {error: TLoginError, data: null }>{
        try{
            const {data} = await apiAuthInstance.post<TLoginResponse>('/sign_in',form)
            TokenService.setToken(data.access_token)
            return {error: null, data: data}
        } catch (e: AxiosError | any) {
            return {error: isAxiosError(e) && e.response ? e.response.data : <AxiosError>{}, data: null}
        }
    }
    static async register(form: TRegistrationForm): Promise<{error: null, data: TRegistrationResponse } | {error: TRegistrationError, data: null }>{
        try{
            const {data} = await apiAuthInstance.post<TRegistrationResponse>('/sign_up',form)
            TokenService.setToken(data.access_token)
            return {error: null, data}
        } catch (e: AxiosError | any) {
            return {error: isAxiosError(e) && e.response ? e.response.data : <AxiosError>{}, data: null}
        }
    }
}