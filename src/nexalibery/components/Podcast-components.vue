<template>
  <div class="podcast-carousel">
    <h2>Most Viewed</h2>
    <p class="carousel-description">Discover the most popular podcasts among our users.</p>

    <div class="search-bar">
      <input type="text" v-model="searchQuery" placeholder="Search podcasts...">
      <Button label="Search" @click="searchPodcasts" />
    </div>

    <Carousel v-model="mostViewedPodcasts">
      <template slot-scope="slotProps">
        <div class="podcast-card">
          <img :src="slotProps.data.image" alt="Podcast cover">
          <h3>{{ slotProps.data.title }}</h3>
          <p>{{ slotProps.data.description }}</p>
          <Button label="Listen Now" @click="listenToPodcast(slotProps.data.id)" />
        </div>
      </template>
    </Carousel>

    <h2>Recommended for You</h2>
    <p class="carousel-description">Personalized podcast recommendations based on your interests.</p>

    <div class="search-bar">
      <input type="text" v-model="searchQuery" placeholder="Search podcasts...">
      <Button label="Search" @click="searchPodcasts" />
    </div>

    <Carousel v-model="recommendedPodcasts">
      <template slot-scope="slotProps">
        <div class="podcast-card">
          <img :src="slotProps.data.image" alt="Podcast cover">
          <h3>{{ slotProps.data.title }}</h3>
          <p>{{ slotProps.data.description }}</p>
          <Button label="Listen Now" @click="listenToPodcast(slotProps.data.id)" />
        </div>
      </template>
    </Carousel>
  </div>
</template>

<script>
import { Carousel } from 'primevue/carousel';
import { Button } from 'primevue/button';

export default {
  components: {
    Carousel,
    Button,
  },
  data() {
    return {
      mostViewedPodcasts: [
        {
          id: 1,
          image: 'https://unsplash.com/s/photos/podcast',
          title: 'La Ruina',
          description: 'Podcast description 1',
        },
        {
          id: 2,
          image: 'https://unsplash.com/s/photos/podcast',
          title: 'The Wild Project',
          description: 'Podcast description 2',
        },
        {
          id: 3,
          image: 'https://unsplash.com/s/photos/podcast',
          title: 'Criminopatia',
          description: 'Podcast description 3',
        },
      ],
      recommendedPodcasts: [
        {
          id: 4,
          image: 'https://unsplash.com/s/photos/podcast',
          title: 'Poco se Habla! Briten y Xuso Jones',
          description: 'Recommended podcast description 1',
        },
        {
          id: 5,
          image: 'https://unsplash.com/s/photos/podcast',
          title: 'Es la Mañana de Federico',
          description: 'Recommended podcast description 2',
        },
        {
          id: 6,
          image: 'https://unsplash.com/s/photos/podcast',
          title: 'Herrera en COPE',
          description: 'Recommended podcast description 3',
        },
      ],
      searchQuery: '',
    };
  },
  methods: {
    listenToPodcast(id) {
      console.log(`Listening to podcast with ID: ${id}`);
    },
    searchPodcasts() {
      const filteredMostViewedPodcasts = this.mostViewedPodcasts.filter(podcast => {
        return podcast.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
            podcast.description.toLowerCase().includes(this.searchQuery.toLowerCase());
      });

      const filteredRecommendedPodcasts = this.recommendedPodcasts.filter(podcast => {
        return podcast.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
            podcast.description.toLowerCase().includes(this.searchQuery.toLowerCase());
      });

      this.mostViewedPodcasts = filteredMostViewedPodcasts;
      this.recommendedPodcasts = filteredRecommendedPodcasts;
    },
  },
};
</script>

<style scoped>
