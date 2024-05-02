<template>
  <div class="multimedia-library">
    <br>
    <input type="text" v-model="searchTerm" placeholder="Search..." class="search-box" @input="filterMultimedia">
    <div class="categories">
      <div class="category videos">
        <h2>Videos</h2>
        <p-card v-for="item in filteredVideos" :key="item.id" class="item">
          <template #title>
            <div class="card-header">
              <img src="../../assets/images/icon-video.png" alt="Video Icon" class="icon">
              <div>
                <h3>{{ item.title }}</h3>
                <p><strong>Author:</strong> {{ item.author }}</p>
                <p>{{ item.shortDescription }}</p>
              </div>
            </div>
          </template>
        </p-card>
      </div>

      <div class="category audiobooks">
        <h2>Audiobooks</h2>
        <p-card v-for="item in filteredAudiobooks" :key="item.id" class="item">
          <template #title>
            <div class="card-header">
              <img src="../../assets/images/icon-audiobook.png" alt="Audiobook Icon" class="icon">
              <div>
                <h3>{{ item.title }}</h3>
                <p><strong>Author:</strong> {{ item.author }}</p>
                <p>{{ item.shortDescription }}</p>
              </div>
            </div>
          </template>
        </p-card>
      </div>
    </div>
  </div>
</template>

<script>
import { MultimediaService } from "@/nexalibery/servicies/multimedia-api.service.js";
import Card from 'primevue/card';

export default {
  components: {
    'p-card': Card
  },
  data() {
    return {
      multimedia: [],
      videos: [],
      audiobooks: [],
      searchTerm: ''
    };
  },
  computed: {
    filteredVideos() {
      return this.videos.filter(item => item.title.toLowerCase().includes(this.searchTerm.toLowerCase()));
    },
    filteredAudiobooks() {
      return this.audiobooks.filter(item => item.title.toLowerCase().includes(this.searchTerm.toLowerCase()));
    }
  },
  created() {
    this.fetchMultimedia();
  },
  methods: {
    async fetchMultimedia() {
      try {
        const multimediaService = new MultimediaService();
        this.multimedia = await multimediaService.getMultimedia();
        this.videos = this.multimedia.filter(item => [1, 2, 3].includes(item.id));
        this.audiobooks = this.multimedia.filter(item => [4, 5, 6].includes(item.id));
      } catch (error) {
        console.error('Error fetching multimedia:', error);
      }
    },
    filterMultimedia() {
      // This method is called whenever the search term changes.
    }
  }
};
</script>

<style scoped>
.multimedia-library {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
.categories {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.category {
  flex: 1;
  margin: 20px;
}
.search-box {
  padding: 10px;
  margin-bottom: 20px;
  width: 300px; /* Adjust the width as needed */
  border-radius: 20px;
  border: 1px solid #ccc;
}
.item {
  margin-bottom: 10px;
}
.card-header {
  display: flex;
  align-items: center;
  gap: 20px;
}
.icon {
  width: 40px; /* Adjusted size */
  height: auto;
}
h1, h2, h3, p {
  font-size: smaller; /* Reduced font size */
}
</style>
