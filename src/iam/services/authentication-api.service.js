import http from "@/shared/services/http-common";

export class AuthenticationApiService {
  signIn(signInbody) {
    return http.post("authentication/sign-in", signInbody);
  }

  signUp(signUpBody) {
    return http.post("authentication/sign-up", signUpBody);
  }
}
