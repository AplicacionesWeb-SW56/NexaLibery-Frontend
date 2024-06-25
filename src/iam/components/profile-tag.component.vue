<script>
import { useAuthenticationStore } from "@/iam/services/authentication.store";
import { UserApiService } from "../services/user-api.service";
import User from "../models/user.entity";

export default {
  name: "profile-tag",
  data() {
    return {
      authenticationStorage: useAuthenticationStore(),
      userService: new UserApiService(),
      user: null,
    };
  },
  created() {
    this.user = this.userService.getById(this.authenticationStorage.currentUserId).then(response => {
      this.user = User.fromResponse(response.data)
    });
  },
};
</script>

<template>
  <div
    class="w-full h-full"
  >
    <router-link
      to="/profile"
      class="w-full h-full flex flex-column align-items-center justify-content-center"
    >
      <img
        :src="this.user?.photo"
        class="w-full h-full border-circle"
      >
      <p
        v-if="this.user"
        class="text-xl md:text-xs"
      >
        @{{ this.user?.username }}
      </p>
    </router-link>
  </div>
</template>

<style scoped></style>
