<script>
import Navigation from "@/public/components/navigation.component.vue";
import Auth from "@/iam/components/auth.component.vue";
import ProfileTag from "@/public/components/profile-tag.component.vue";

import { useAuthenticationStore } from "@/iam/services/authentication.store";

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
      visible: false,
    };
  },
  methods: {
    toggleVisible() {
      this.visible = true;
    },

    getUsername(){
      return this.authenticationStorage.currentUsername;
    },

    getUserPic(){
      return "";
    }
  },
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
        class="w-8rem h-8rem align-self-center"
        :photo="getUserPic()"
        :name="getUsername()"
      />
      <navigation class="my-2" />
      <auth />
    </div>
  </pv-sidebar>
</template>
<style></style>
