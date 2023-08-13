import {STATUS, TLoginError, TLoginForm, TRegistrationError, TRegistrationForm} from "../types/auth.ts";
import {create} from "zustand";
import {devtools} from "zustand/middleware";
import {AuthService} from "../services/auth";

export type TUserStore = {
    data: {
        email: string
    } | null
    error: TLoginError| TRegistrationError | null
    status: STATUS
}

type Actions = {
    register: (form: TRegistrationForm) => Promise<void>
    logout: () => void
    login: (form: TLoginForm) => Promise<void>
    cleanErrors: () => void
    checkAuth: () => Promise<void>
}

const initialState: TUserStore = {
    data: null,
    error: null,
    status: STATUS.initial
}

export const useUserStore = create<TUserStore & Actions>()(
    devtools((set) => ({
        ...initialState,
        register: async (form: TRegistrationForm) => {
                set(state => ({...state, status: STATUS.request}))
                const {data, error} = await AuthService.register(form)
                if(!error)
                    set((state) => ({...state, data: data, error: null, status: STATUS.success}))
                else
                    set((state) => ({...state, error: error, status: STATUS.failure}))
        },
        login: async (form: TLoginForm) => {
            set(state => ({...state, status: STATUS.request}))
            const {data, error} = await AuthService.login(form)
            if(!error)
                set((state) => ({...state, data: data, error: null, status: STATUS.success}))
            else
                set((state) => ({...state, error: error, status: STATUS.failure}))
        },
        logout: () => {
            AuthService.logout()
            set(() => ({...initialState, status: STATUS.success}))
        },
        cleanErrors: ()  => {},
        checkAuth: async () => {
            set(state => ({...state, status: STATUS.request}))
            const {data, ok} = await AuthService.checkAuth()
            console.log(ok)
            if(ok)
                set((state) => ({...state, data: data, error: null, status: STATUS.success}))
            else
                set((state) => ({...state, status: STATUS.failure}))
        },
    })),
)