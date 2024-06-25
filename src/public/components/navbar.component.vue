<script>
import LanguageSwitcher from '@/public/components/language-switcher.component.vue';
import Navigation from '@/public/components/navigation.component.vue';
import Auth from '@/iam/components/auth.component.vue';
import ProfileTag from '@/iam/components/profile-tag.component.vue';

import { useAuthenticationStore } from '@/iam/services/authentication.store';

export default {
  name: "navbar",
  emits: ['toggle-sidebar'],
  components: {
    LanguageSwitcher,
    Navigation,
    Auth,
    ProfileTag
  },
  data(){
    return {
      authenticationStorage: useAuthenticationStore(),
    }
  },
  computed: {
  },
  methods: {
    toggleSidebar(){
      this.$emit('toggle-sidebar')
    },

    isAuthenticated() {
      return this.authenticationStorage.isSignedIn;
    }
  },
};
</script>

<template>
  <header class="w-full h-7rem border-none border-noround">
    <pv-toolbar class="w-full bg-transparent h-full md:justify-content-between overflow-hidden flex-nowrap border-none border-noround">
      <template #start>
        <pv-button
          v-if="isAuthenticated()"
          @click="toggleSidebar"
          icon="pi pi-bars"
          class="py-1 mr-3 md:hidden"
        />
        <router-link
          class="overflow-hidden"
          to="/"
          target="_self"
        >
          <img
            class="w-6rem max-h-6rem md:w-8rem"
            src="@/assets/images/Logo.png"
            alt="logo brand"
          >
        </router-link>
        <pv-divider
          layout="vertical"
          class="hidden md:block px-3"
        />
        <navigation
          class="hidden md:flex md:flex-column"
        />
      </template>
      <template #end>
        <auth
          class="hidden md:flex"
        />
        <pv-divider
          layout="vertical"
          class="hidden md:block px-3"
        />
        <language-switcher />       
        <div class="px-2" />
        <profile-tag
          v-if="isAuthenticated()"
          class="hidden md:inline-block w-4rem h-4rem"
        />
      </template>
    </pv-toolbar>
  </header>
</template>

<style scoped>
header {
  background-color: var(--header-background);
}

.p-button:not(.p-button-link){
    background-color: var(--button-background);
    border-color: var(--button-background);
}

img {
  transform: translateY(15%);
}
</style>
