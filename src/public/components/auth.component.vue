<script>
import LinkButton from "@/shared/components/link-button.component.vue";

export default {
  name: "auth",
  components: {
    LinkButton,
  },
  props: {
    authenticated: Boolean,
    pic: String,
  },
};
</script>
<template>
  <nav
    v-if="!authenticated"
    class="gap-3 justify-content-between"
  >
    <ul class="flex flex-column gap-3 md:flex-row list-none p-0">
      <li>
        <link-button
          to="/log-in"
          transparent
        >
          <p>{{ $t("navigation.login") }}</p>
        </link-button>
      </li>
      <li>
        <link-button to="/sign-in">
          <p>{{ $t("navigation.signin") }}</p>
        </link-button>
      </li>
    </ul>
  </nav>
  <nav v-else>
    <link-button
      class="md:w-8rem"
      to="/log-out"
    >
      <i class="pi pi-sign-out" />
      <p>{{ $t("navigation.logout") }}</p>
    </link-button>
  </nav>
</template>
<style></style>
