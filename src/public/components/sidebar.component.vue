<script>
import Navigation from "@/public/components/navigation.component.vue";
import Auth from "@/iam/components/auth.component.vue";
import ProfileTag from "@/iam/components/profile-tag.component.vue";

import { useAuthenticationStore } from "@/iam/services/authentication.store";
import User from "@/iam/models/user.entity";
import { UserApiService } from "@/iam/services/user-api.service";

export default {
  name: "sidebar",
  components: {
    Navigation,
    Auth,
    ProfileTag
  },
  data() {
    return {
      authenticationStorage: useAuthenticationStore(),
      userService: new UserApiService(),
      user: null,
      visible: false,
    };
  },
  methods: {
    toggleVisible() {
      this.visible = true;
    },

    isAuthenticated() {
      return this.authenticationStorage.isSignedIn;
    },
  },

  created(){
    this.user = this.userService.getById(this.authenticationStorage.currentUserId).then(response => {
      this.user = User.fromResponse(response.data)
    });
  }
};
</script>
<template>
  <pv-sidebar
    header="Menu"
    class="w-15rem"
    v-model:visible="visible"
  >
    <div class="w-full h-full flex flex-column justify-content-evenly gap-5">
      <profile-tag
        v-if="isAuthenticated()"
        class="w-8rem h-8rem align-self-center"
        :photo="user?.photo"
        :name="user?.username"
      />
      <navigation class="my-2" />
      <auth />
    </div>
  </pv-sidebar>
</template>
<style></style>
