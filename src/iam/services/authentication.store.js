import { defineStore } from "pinia";
import { AuthenticationApiService } from "./authentication-api.service";
import { SignInResponse } from "../models/sign-in.response";
import { SignUpResponse } from "../models/sign-up.response";

const authenticationService = new AuthenticationApiService();

export const useAuthenticationStore = defineStore({
  id: "authentication",
  state: () => ({
    signedIn: false
  }),
  getters: {
    isSignedIn: (state) => state.signedIn,
    currentUserId: () => localStorage.getItem("userId"),
    currentEmail: () => localStorage.getItem("userEmail"),
    currentToken: () => localStorage.getItem("token"),
  },
  actions: {
    persistAuthentication(){
      if(this.signedIn) return;

      const token = localStorage.getItem("token");
      if(!token) return;

      this.signedIn = true;
    },
    async signIn(signInRequest, router, onError = null) {
      try {
        const response = await authenticationService.signIn(signInRequest);
        const signInResponse = new SignInResponse(
          response.data.token,
          response.data.id,
          response.data.email,
        );
        localStorage.setItem("token", signInResponse.token);
        localStorage.setItem("userId", signInResponse.id);
        localStorage.setItem("userEmail", signInResponse.email);
        this.signedIn = true;
        console.log(signInResponse);
        await router.push({ name: "home" });
      } catch (error) {
        if (onError) onError(error.response.data);
        console.error(error);
        const pushed = await router.push({ name: "sign-in" });
        console.error("catch", pushed);
      }
    },

    async signUp(signUpRequest, router, onError = null) {
      authenticationService
        .signUp(signUpRequest)
        .then((response) => {
          const signUpResponse = new SignUpResponse(response.data.message);

          console.log(signUpResponse.message);
          router.push({ name: "sign-in" });
        })
        .catch((error) => {
          if (onError) onError(error.response.data);
          console.log(error);
          router.push({ name: "sign-up" });
        });
    },

    async signOut(router) {
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      localStorage.removeItem("userEmail");
      router.push({ name: "sign-in", force: true });
      router.go(0);
    },
  },
});
