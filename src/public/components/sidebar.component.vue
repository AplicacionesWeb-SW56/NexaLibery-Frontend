<script>
import Navigation from "@/public/components/navigation.component.vue";
import Auth from "@/public/components/auth.component.vue";
import LocalUser from "@/shared/model/local-user.entity";
import ProfileTag from "@/public/components/profile-tag.component.vue";

export default {
  name: "sidebar",
  components: {
    Navigation,
    Auth,
    ProfileTag
  },
  data() {
    return {
      visible: false,
    };
  },
  props: {
    authenticated: Boolean,
    user: LocalUser,
  },
  methods: {
    toggleVisible() {
      this.visible = true;
    },
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
        :photo="user?.photo"
        :name="user?.name"
      />
      <navigation class="my-2" />
      <auth
        :authenticated="authenticated"
      />
    </div>
  </pv-sidebar>
</template>
<style></style>
