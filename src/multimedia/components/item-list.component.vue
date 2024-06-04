<script>
import ItemCard from "@/multimedia/components/item-card.component.vue";

export default {
  name: "item-list",
  emits: ["click"],
  components: {
    ItemCard,
  },
  props: {
    items: Array,
    buttonText: String
  },
};
</script>
<template>
  <pv-data-view
    :value="items"
    layout="grid"
  >
    <template #grid="props">
      <div class="flex flex-row gap-2 flex-wrap justify-content-evenly">
        <item-card
          v-for="(item, index) in props.items"
          :key="index"
          :pic="item.pic"
          :description="item.description"
          :title="item.title"
          :url="item.url"
          :button-text="buttonText"
          @click="$emit('click', item.url)"
        />
      </div>
    </template>
  </pv-data-view>
</template>
<style scoped></style>

