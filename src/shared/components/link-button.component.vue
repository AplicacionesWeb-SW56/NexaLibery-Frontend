<script>
export default {
  props: {
    label: { type: String, default: null, required: false },
    target: { type: String, default: "_self", required: false },
    transparent: { type: Boolean, default: false, required: false },
    to: { type: String, required: false },
    style: {},
    layout: { type: String, default: "center", required: false },
  },
};
</script>

<template>
  <div 
    class="w-full h-full p-1 no-underline"
  >
    <router-link
      :to="this.to"
      :target="this.target"
      :rel="'noopener'"
    >
      <pv-button
        :style="{ 'justify-content': layout, ...this.style }"
        class="w-full h-full py-2 px-3 gap-2 text"
        :link="this.transparent"
      >
        <p v-if="label != null">
          {{ label }}
        </p>
        <slot />
      </pv-button>
    </router-link>
  </div>
</template>

<style scoped></style>

