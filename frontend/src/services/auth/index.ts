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
            const {data} = await apiAuthInstance.post<TLoginResponse>('/login',form)
            TokenService.setToken(data.accessToken)
            return {error: null, data}
        } catch (e: AxiosError | any) {
            if(isAxiosError(e))
                return e.response?.data
            return {error: isAxiosError(e) && e.response ? e.response.data : <AxiosError>{}, data: null}
        }
    }
    static async register(form: TRegistrationForm): Promise<{error: null, data: TRegistrationResponse } | {error: TRegistrationError, data: null }>{
        try{
            const {data} = await apiAuthInstance.post<TRegistrationResponse>('/register',form)
            TokenService.setToken(data.accessToken)
            return {error: null, data}
        } catch (e: AxiosError | any) {
            return {error: isAxiosError(e) && e.response ? e.response.data : <AxiosError>{}, data: null}
        }
    }
}