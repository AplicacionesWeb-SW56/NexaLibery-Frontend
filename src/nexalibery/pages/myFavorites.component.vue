<template>
  <div class="my-favorites">
    <p class="header">My Favorites</p>
    <div class="scroll-container">
      <div class="item" v-for="(item, index) in items" :key="index">
        <img :src="item" alt="Favorite item" width="150">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyFavorites",
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.my-favorites .header {
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
  display: block;
}
</style>
