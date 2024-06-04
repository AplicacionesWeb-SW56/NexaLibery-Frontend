<script>
export default {
  name: "item-card",
  emits: ["click"],
  props: {
    pic: String,
    description: String,
    title: String,
    url: String,
    buttonText: String,
  },
  data() {
    return {
      maxDescriptionLength: 150,
      maxTitleLength: 30,
    }
  },
};
</script>
<template>
  <div
    class="shadow-3 p-3 my-3 flex w-full md:w-27rem h-23rem gap-3 flex-row"
  >
    <img
      class="p-0 h-15rem w-5 h-full align-self-center"
      :src="pic"
      :alt="title"
    >
    <div class="flex flex-column justify-content-between w-8 gap-2">
      <h2 class="text-3xl">
        {{ title.substring(0, maxTitleLength) }}...
      </h2>
      <p class="text-overflow-ellipsis">
        {{ description.substring(0, maxDescriptionLength) }}...
      </p>
      <pv-button
        @click="$emit('click')"
        class="w-full justify-content-center"
      >
        {{ buttonText }}
      </pv-button>
    </div>
  </div>
</template>
<script scoped></script>
