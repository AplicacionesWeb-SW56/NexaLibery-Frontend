import { defineStore } from "pinia";
import { AuthenticationApiService } from "./authentication-api.service";
import { SignInResponse } from "../models/sign-in.response";
import { SignUpResponse } from "../models/sign-up.response";

const authenticationService = new AuthenticationApiService();

export const useAuthenticationStore = defineStore({
  id: "authentication",
  state: () => ({
    signedIn: false,
    userId: 0,
    username: ""
  }),
  getters: {
    isSignedIn: (state) => state["signedIn"],
    currentUserId: (state) => state["userId"],
    currentUsername: (state) => state["username"],
    currentToken: () => localStorage.getItem("token")
  },
  actions: {
    async signIn(signInRequest, router) {
      authenticationService.signIn(signInRequest).then((response) => {
        const signInResponse = new SignInResponse(response.data.id, response.data.name, response.data.token);
        this.signedIn = true;
        this.userId = signInResponse.id;
        this.username = signInResponse.username;
        localStorage.setItem("token", signInResponse.token);
        console.log(signInResponse.token)
        router.push({name: "home"});
      }).catch((error) => {
        console.log(error);
        router.pus({name: "sign-in"});
      });
    },

    async signUp(signUpRequest, router) {
      authenticationService.signUp(signUpRequest).then((response) => {
        const signUpResponse = new SignUpResponse(response.data.message);
        console.log(signUpResponse.message);
        router.push({name: "sign-in"});
      }).catch((error) => {
        console.log(error);
        router.pus({name: "sign-in"});
      });
    },

    async signOut(router){
      this.signedIn = false;
      this.userId = 0;
      this.username = "";
      localStorage.removeItem("token");
      await router.push({name: "sign-in"});
    }
  }
});
