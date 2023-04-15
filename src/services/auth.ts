
export type LoginBody = {
    username: string;
    password: string;
}

export const authService = {
    login: (credentials: LoginBody) => {
        const { username, password } = credentials;

        const status = username === 'admin@synergie-solution.com' && password === 'uL@23sms!';

        status && sessionStorage.setItem('access_token', 'uL@23sms!uL@23sms!uL@23sms!uL@23sms!uL@23sms!');

        return{
            status: status
        }
    }
}