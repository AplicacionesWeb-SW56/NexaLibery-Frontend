<script>
import { useAuthenticationStore } from '@/iam/services/authentication.store';

export default {
  name: "profile-tag",
  data(){
    return {
     authenticationStorage: useAuthenticationStore() 
    }
  },
  methods: {
    isAuthenticated() {
      return this.authenticationStorage.isSignedIn;
    },
    getUsername(){
      return this.authenticationStorage.currentUsername;
    },
    getUserPic(){
      return "";
    }
  }
};
</script>

<template>
  <div
    class="w-full h-full"
    v-if="isAuthenticated()"
  >
    <router-link
      to="/profile"
      class="w-full h-full flex flex-column align-items-center justify-content-center"
    >
      <img
        :src="getUserPic()"
        class="w-full h-full border-circle"
      >
      <p
        v-if="getUsername()"
        class="text-xl md:text-xs"
      >
        @{{ getUsername() }}
      </p>
    </router-link>
  </div>
</template>

<style scoped></style>
