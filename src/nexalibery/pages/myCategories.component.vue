<script>
export default {
  name: "my-categories",
  props: {
    items: Array
  }
}
</script>

<template>
  <div class="category-container">
    <p class="header">My Categories</p>
    <div class="cards">
      <!-- Using button tag directly to improve semantics -->
      <button v-for="item in items" :key="item.name" class="category-button">
        <img :src="item.url" width="150" alt="Category image" class="category-image">
        <p>{{ item.name }}</p>
      </button>
    </div>
  </div>
</template>

<style scoped>
.category-container {
  overflow: hidden;
}

.header {
  text-align: center;
  font-family: "Andada Pro", serif;
  font-weight: 500;
  font-size: 1.5rem;
  margin-block: 10px;
}

.category-button {
  display: flex;
  flex-direction: column;
  margin: 10px;
  background-color: transparent;
  border: none;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  cursor: pointer;
}

.cards {
  height: 90%;
  overflow-y: auto;
  border: 1px solid #e2e8f0;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.24);
  border-radius: 15px;
  padding-top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.category-image {
  width: 100%; /* Responsive image sizing */
}
</style>
