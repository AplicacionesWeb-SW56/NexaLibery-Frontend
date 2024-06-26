import {useAuthenticationStore} from "./authentication.store.js";

export const authenticationGuard = (to, from, next) => {
    
    const authenticationStore = useAuthenticationStore();
    authenticationStore.persistAuthentication();
    const isAnonymous = !authenticationStore.isSignedIn;
    const publicRoutes = ['/sign-in', '/sign-up', '/page-not-found'];
    const routeRequiresToBeAuthenticated = !publicRoutes.includes(to.path);

    if (isAnonymous && routeRequiresToBeAuthenticated) return next({name: 'sign-in'});
    else return next();
}
