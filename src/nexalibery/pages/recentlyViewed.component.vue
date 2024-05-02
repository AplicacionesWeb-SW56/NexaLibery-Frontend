<template>
  <div class="recently-viewed">
    <p class="title">Recently Viewed</p>
    <div class="scroll-container">
      <div class="item" v-for="(item, index) in items" :key="index">
        <img :src="item" alt="Viewed item image" width="150">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecentlyViewed",
  props: {
    items: {
      type: Array,
      required: true // Esto asegura que items es proporcionado
    }
  }
}
</script>

<style scoped>
.recently-viewed .title {
  text-align: center;
  font-family: "Andada Pro", serif;
  font-weight: 500;
  font-size: 1.5rem;
  margin: 10px 0;
}

.scroll-container {
  display: flex;
  overflow-x: auto;
  padding: 20px;
  gap: 10px;
}

.item {
  min-width: 150px;
  flex-shrink: 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
}

.item img {
  width: 100%;
  display: block; /* Elimina el espacio extra bajo la imagen */
}
</style>
