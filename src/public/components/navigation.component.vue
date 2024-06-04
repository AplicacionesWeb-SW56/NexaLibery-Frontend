<script>
import LinkButton from "@/shared/components/link-button.component.vue";

export default {
  name: "navigation",
  components: {
    LinkButton,
  },
};
</script>
<template>
  <nav>
    <ul class="flex flex-column list-none p-0 gap-2 md:gap-0 md:flex-row">
      <li>
        <link-button
          layout="start"
          to="/library"
          transparent
        >
          <i class="pi pi-home flex-0 md:hidden" />
          <p>{{ $t("navigation.library") }}</p>
        </link-button>
      </li>
      <li>
        <link-button
          layout="start"
          to="/podcast"
          transparent
        >
          <i class="pi pi-headphones md:hidden" />
          <p>{{ $t("navigation.podcast") }}</p>
        </link-button>
      </li>
      <li>
        <link-button
          layout="start"
          to="/multimedia"
          transparent
        >
          <i class="pi pi-video md:hidden" />
          <p>{{ $t("navigation.multimedia") }}</p>
        </link-button>
      </li>
      <li>
        <link-button
          layout="start"
          to="/upload"
          transparent
        >
          <i class="pi pi-upload md:hidden" />
          <p>{{ $t("navigation.upload") }}</p>
        </link-button>
      </li>
    </ul>
  </nav>
</template>
<style scoped>
li {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
}
</style>

