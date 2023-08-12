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

    static async checkAuth(): Promise<{ok: true, data: TLoginResponse } | {ok: false, data: null }>{
        try{
            const {data} = await apiAuthInstance.get<TLoginResponse>('/get_me', {headers:{
                Authorization: `Bearer ${TokenService.getToken()}`
            }})
            return {ok: true, data}
        }
        catch (error){
            return {ok: false, data: null}
        }
    }

    static async logout(): void{
        TokenService.deleteToken()
    }
}