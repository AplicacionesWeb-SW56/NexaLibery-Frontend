<script>
import LinkButton from "@/shared/components/link-button.component.vue";
import { useAuthenticationStore } from "../services/authentication.store";

export default {
  name: "auth",
  components: {
    LinkButton,
  },
  data() {
    return {
      authenticationStorage: useAuthenticationStore(),
    };
  },
  props: {
    pic: String,
  },
  methods: {
    signOut(){
      this.authenticationStorage.signOut(this.$router);
    },

    isAuthenticated() {
      return this.authenticationStorage.isSignedIn;
    }
  }
};
</script>
<template>
  <nav
    v-if="!this.isAuthenticated()"
    class="gap-3 justify-content-between"
  >
    <ul class="flex flex-column gap-3 md:flex-row list-none p-0">
      <li>
        <link-button
          to="/sign-in"
          transparent
        >
          <p>{{ $t("navigation.signin") }}</p>
        </link-button>
      </li>
      <li>
        <link-button to="/sign-up">
          <p>{{ $t("navigation.signup") }}</p>
        </link-button>
      </li>
    </ul>
  </nav>
  <nav v-else>
    <pv-button
      class="w-full h-full py-2 px-3 gap-2 text"
      @click="signOut()"
    >
      <i class="pi pi-sign-out" />
      <p>{{ $t("navigation.logout") }}</p>
    </pv-button>
  </nav>
</template>
<style></style>
