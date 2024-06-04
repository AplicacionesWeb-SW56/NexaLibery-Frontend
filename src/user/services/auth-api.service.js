import { auxHttp as http } from "@/shared/services/http-common";

export class AuthApiService {
  logIn(logInbody) {
    return http.post("/log-in", logInbody);
  }

  signIn(signInBody) {
    return http.post("/sign-in", signInBody);
  }
}
