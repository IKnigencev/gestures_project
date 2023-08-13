export class TokenService{
    static setToken(accessToken: string): void {
        localStorage.setItem('accessToken', accessToken)
    }

    static getToken(){
        return localStorage.getItem('accessToken')
    }

    static deleteToken() {
        return localStorage.removeItem('accessToken')
    }

    static getAuthorization(){
        return `Bearer ${localStorage.getItem('accessToken')}`
    }
}