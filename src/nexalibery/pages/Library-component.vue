<template>
  <div class="library">
    <h2>Most Viewed Books</h2>
    <div class="most-viewed-books">
      <div v-for="book in mostViewedBooks" :key="book.id" class="book">
        <h3>{{ book.title }}</h3>
        <p><strong>Author:</strong> {{ book.author }}</p>
        <p>{{ book.shortDescription }}</p>
      </div>
    </div>
    <br>
    <p-button @click="loadMoreMostViewed" label="Load More" icon="pi pi-ellipsis-h" iconPos="right"></p-button>

    <h2>Recommendations for You</h2>
    <div class="recommended-books">
      <div v-for="book in recommendedBooks" :key="book.id" class="book">
        <h3>{{ book.title }}</h3>
        <p><strong>Author:</strong> {{ book.author }}</p>
        <p>{{ book.shortDescription }}</p>
      </div>
    </div>
    <br>
    <p-button @click="loadMoreRecommended" label="Load More" icon="pi pi-ellipsis-h" iconPos="right"></p-button>
  </div>
</template>

<script>
import { default as LibraryService } from "@/nexalibery/servicies/library-api.service.js"; // Corrected import path
import Button from 'primevue/button';

export default {
  components: {
    PButton: Button
  },
  data() {
    return {
      mostViewedBooks: [],
      recommendedBooks: []
    };
  },
  created() {
    this.fetchBooks();
  },
  methods: {
    async fetchBooks() {
      try {
        const books = await LibraryService.getBooks(); // Assuming the method to fetch books is called getLibrary
        this.mostViewedBooks = books.filter(book => [1, 2, 3].includes(book.id));
        this.recommendedBooks = books.filter(book => [4, 5, 6].includes(book.id));
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    },
    loadMoreMostViewed() {
    },
    loadMoreRecommended() {
    }
  }
};
</script>

<style scoped>
.library {
}
.most-viewed-books,
.recommended-books {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
.book {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 1rem;
  width: calc(33% - 1rem);
}
</style>
