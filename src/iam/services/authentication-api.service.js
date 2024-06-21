import { auxHttp as http } from "@/shared/services/http-common";

export class AuthenticationApiService {
  signIn(signInbody) {
    return http.post("/sign-in", signInbody);
  }

  signUp(signUpBody) {
    return http.post("/sign-up", signUpBody);
  }
}
