
export type LoginBody = {
    username: string;
    password: string;
}

export const authService = {
    login: (credentials: LoginBody) => {
        const { username, password } = credentials;

        const status = username === 'admin' && password === '1234';

        status && sessionStorage.setItem('access_token', 'uL@23sms!uL@23sms!uL@23sms!uL@23sms!uL@23sms!');

        return{
            status: status
        }
    }
}