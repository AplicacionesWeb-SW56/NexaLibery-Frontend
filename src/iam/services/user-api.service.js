import http from "@/shared/services/http-common";

export class UserApiService {
    getById(id) {
        return http.get(`users/${id}`);
    }
}
