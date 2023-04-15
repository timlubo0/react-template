
export const useAuth = () => {
    const session = typeof window !== 'undefined' ?  sessionStorage.getItem('access_token') : null;
    const isLoggedIn = session === null ? false : true;

    return{
        isLoggedIn: isLoggedIn
    }
}