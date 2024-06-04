import LocalUser from "../model/local-user.entity";

const LOCAL_STORAGE_USER_ITEM = "user";

export class LocalAuthApiService {
    removeUser(){
        localStorage.removeItem(LOCAL_STORAGE_USER_ITEM);
    }

    setLocalUser(user){
        try {
            const localUser = LocalUser.fromUser(user);
            localStorage.setItem(LOCAL_STORAGE_USER_ITEM, JSON.stringify(localUser));
            return true;
        } catch (e) {
            return false;
        }
    }

    getLocalUser(){
        const item = localStorage.getItem(LOCAL_STORAGE_USER_ITEM);
        if(item == null || item == ""){
            return null;
        }
        
        return LocalUser.fromObject(JSON.parse(item));
    }

    isAuth(){
        const item = localStorage.getItem(LOCAL_STORAGE_USER_ITEM);
        return (item != null && item != "");
    }
}
