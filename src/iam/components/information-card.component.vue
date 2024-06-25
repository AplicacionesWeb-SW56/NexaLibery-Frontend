<script>
export default {
  name: "information-card",
  props: {
    title: String,
  },
};
</script>

<template>
  <div class="md:inline-block md:w-17rem sm:block sm:w-full">
    <p class="title">
      {{ this.title }}
    </p>
    <pv-card
      class="block h-10rem w-full border-1 border-solid border-black-alpha-90 border-round-xl"
    >
      <template #content>
        <slot />
      </template>
    </pv-card>
  </div>
</template>

<style>
.p-card {
  background-color: var(--card-background);
}

.p-card-body {
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
}
</style>
