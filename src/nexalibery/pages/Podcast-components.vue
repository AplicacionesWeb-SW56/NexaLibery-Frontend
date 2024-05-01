<template>
  <div class="podcast-carousel">
    <h2>Most Viewed</h2>
    <p class="carousel-description">Discover the most popular podcasts among our users.</p>
    <div class="search-bar">
      <input type="text" v-model="searchQuery" placeholder="Search podcasts...">
      <br><br>
      <button @click="searchPodcasts">Search</button>
    </div>
    <br>
    <Carousel :value="filteredMostViewedPodcasts">
      <template #item="slotProps">
        <div class="podcast-card">
          <img :src="getImageUrlMostViewed(slotProps.data.id)" alt="Podcast cover">
          <h3>{{ slotProps.data.title }}</h3>
          <p>{{ slotProps.data.shortDescription }}</p>
          <br>
          <button @click="listenToPodcast(slotProps.data.id)">Listen Now</button>
        </div>
      </template>
    </Carousel>
    <h2>Recommended for You</h2>
    <p class="carousel-description">Personalized podcast recommendations based on your interests.</p>
    <Carousel :value="filteredRecommendedPodcasts">
      <template #item="slotProps">
        <div class="podcast-card">
          <img :src="getImageUrlRecommended(slotProps.data.id)" alt="Podcast cover">
          <h3>{{ slotProps.data.title }}</h3>
          <p>{{ slotProps.data.shortDescription }}</p>
          <br>
          <button @click="listenToPodcast(slotProps.data.id)">Listen Now</button>
        </div>
      </template>
    </Carousel>
  </div>
</template>

<script>
import Carousel from 'primevue/carousel';
import Button from 'primevue/button';
import PodcastApiService from "@/nexalibery/servicies/podcast-api.service.js";

export default {
  components: {
    Carousel,
    Button
  },
  data() {
    return {
      mostViewedPodcasts: [],
      recommendedPodcasts: [],
      filteredMostViewedPodcasts: [],
      filteredRecommendedPodcasts: [],
      searchQuery: '',
    };
  },
  async mounted() {
    await this.fetchPodcasts();
  },
  methods: {
    async fetchPodcasts() {
      try {
        this.mostViewedPodcasts = await PodcastApiService.getMostViewedPodcasts();
        this.recommendedPodcasts = await PodcastApiService.getRecommendedPodcasts();
        this.filteredMostViewedPodcasts = this.mostViewedPodcasts;
        this.filteredRecommendedPodcasts = this.recommendedPodcasts;
      } catch (error) {
        console.error('Error fetching podcasts:', error);
      }
    },
    getImageUrlMostViewed(id) {
      const imageMap = {
        '1': 'https://podcastaddict.com/cache/artwork/thumb/3206581',
        '2': 'https://podcastaddict.com/cache/artwork/thumb/3761459',
        '3': 'https://www.omnycontent.com/d/programs/e73c998e-6e60-432f-8610-ae210140c5b1/a91018a4-ea4f-4130-bf55-ae270180c327/image.jpg?t=1684846432&size=small',
        '4': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYlKT5Bf9PbGQgKM1Dz11qkLYAieVBEGA2v-ZRZqhV9g&s',
        '5': 'https://podcastaddict.com/cache/artwork/thumb/437',
      };
      return imageMap[id]
    },
    getImageUrlRecommended(id) {
      const imageMap = {
        '1': 'https://podcastaddict.com/cache/artwork/thumb/3851126',
        '2': 'https://www.omnycontent.com/d/playlist/e73c998e-6e60-432f-8610-ae210140c5b1/96c5c41e-0bc8-4661-b184-ae32006cd726/d623ef0b-3fee-4c26-b815-ae32006cd739/image.jpg?t=1643956581&size=small',
        '3': 'https://upload.wikimedia.org/wikipedia/en/d/d8/Reply_All_%28Podcast%29_Logo.png',
        '4': 'https://cachedimages.podchaser.com/256x256/aHR0cHM6Ly9tZWdhcGhvbmUuaW1naXgubmV0L3BvZGNhc3RzL2Y1MjFiMTIwLTJjMzAtMTFlNi1iNWYzLTYzZWU5ODRlZTFhNC9pbWFnZS9TcG90aWZ5X1BvZGNhc3RfU2NpZW5jZS1WU19LZXktQXJ0XzMwMDB4MzAwMC5qcGc%2FaXhsaWI9cmFpbHMtNC4zLjEmbWF4LXc9MzAwMCZtYXgtaD0zMDAwJmZpdD1jcm9wJmF1dG89Zm9ybWF0JTJDY29tcHJlc3M%3D/aHR0cHM6Ly93d3cucG9kY2hhc2VyLmNvbS9pbWFnZXMvbWlzc2luZy1pbWFnZS5wbmc%3D',
        '5': 'https://cachedimages.podchaser.com/256x256/aHR0cHM6Ly9mLnByeHUub3JnL3RoZW1vdGgvaW1hZ2VzLzY4NWExN2FiLTM4OGEtNDA1OS1iZjc1LWNkNzZiYjU5YjZjNi9uZXdfcG9kY2FzdF9sb2dvX3ByeC5wbmc%3D/aHR0cHM6Ly93d3cucG9kY2hhc2VyLmNvbS9pbWFnZXMvbWlzc2luZy1pbWFnZS5wbmc%3D',
      };
      return imageMap[id]
    },
    listenToPodcast(id) {
      console.log(`Listening to podcast with ID: ${id}`);
    },
    searchPodcasts() {
      const query = this.searchQuery.toLowerCase();
      this.filteredMostViewedPodcasts = this.mostViewedPodcasts.filter(podcast =>
          podcast.title.toLowerCase().includes(query) ||
          podcast.shortDescription.toLowerCase().includes(query)
      );
      this.filteredRecommendedPodcasts = this.recommendedPodcasts.filter(podcast =>
          podcast.title.toLowerCase().includes(query) ||
          podcast.shortDescription.toLowerCase().includes(query)
      );
    }
  },
};
</script>

<style scoped>
.podcast-card {
  display: flex;
  flex-direction: column;
  align-items:center;
  text-align: center;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  border-radius: 10px;
  background-color: #fff;
}

.podcast-card img {
  width: 200px;
  height: 200px;
}

.podcast-info h3 {
  margin: 10px 0;
}

.podcast-info p {
  color: #666;
  font-size: 0.9em;
}
</style>
