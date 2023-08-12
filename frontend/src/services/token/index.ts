import {apiInstance} from "../../contants.ts";
import {TLoginForm, TLoginResponse, TRegistrationForm, TRegistrationResponse} from "../../types/auth.ts";
import axios, {AxiosError, isAxiosError} from "axios";

export class TokenService{
    static setToken(accessToken: string): void {
        localStorage.setItem('accessToken', accessToken)
    }
}