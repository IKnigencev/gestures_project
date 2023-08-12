export type TLoginForm = {
    email: string
    password: string
}

export type TRegistrationForm = {
    email: string
    password: string
    password_confirmation: string
}

export type UserData = {
    email: string,
}

export type TLoginResponse = {
    access_token: string,
    email: string
}

export type TRegistrationResponse = {
    access_token: string,
    email: string
}

export enum STATUS {
    initial = 'initial',
    request = 'request',
    success = 'success',
    failure = 'failure',
}

export type TLoginError = {
    email?: string,
    password?: string,
}

export type TRegistrationError = {
    email?: string,
    password?: string,
    password_confirmation?: string
}
