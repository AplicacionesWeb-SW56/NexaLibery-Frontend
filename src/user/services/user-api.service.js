import User from "@/user/model/user.entity.js";

export class UserApiService {
    getById(id) {
        if (typeof id != "number") return null;

        return new User(
            0,
            "renzo",
            "renzololi1@hotmail.com",
            "Estudiante de Ing de Software en la Universidad Peruana de Ciencias",
            "7777-1111-4444-6666",
            new Date().toISOString(),
            new Date().toISOString(),
            0,
            0,
            "https://picsum.photos/300/300")
    }
}
