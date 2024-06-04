<script>
import LanguageSwitcher from '@/public/components/language-switcher.component.vue';
import Navigation from '@/public/components/navigation.component.vue';
import Auth from '@/public/components/auth.component.vue';
import LocalUser from '@/shared/model/local-user.entity';
import ProfileTag from '@/public/components/profile-tag.component.vue';

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
    }
  },
  computed: {
  },
  props: {
    authenticated: Boolean,
    user: LocalUser
  },
  methods: {
    toggleSidebar(){
      this.$emit('toggle-sidebar')
    }
  },
};
</script>

<template>
  <header class="w-full h-7rem border-none border-noround">
    <pv-toolbar class="w-full bg-transparent h-full md:justify-content-between overflow-hidden flex-nowrap border-none border-noround">
      <template #start>
        <pv-button
          v-if="authenticated"
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
          v-if="authenticated"
          class="hidden md:flex md:flex-column"
        />
      </template>
      <template #end>
        <auth
          :user="user"
          :authenticated="authenticated"
          class="hidden md:flex"
        />
        <pv-divider
          layout="vertical"
          class="hidden md:block px-3"
        />
        <language-switcher />       
        <pv-divider
          v-if="authenticated"
          layout="vertical"
          class="hidden md:block px-3"
        />
        <profile-tag
          v-if="authenticated"
          class="hidden md:inline-block w-4rem h-4rem"
          :photo="user?.photo"
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
