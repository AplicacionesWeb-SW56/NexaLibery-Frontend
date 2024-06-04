<script>
import VideoList from '@/multimedia/components/video-list.component.vue';
import VideoPlayer from '@/multimedia/components/video-player.component.vue';
import { Multimedia } from '../model/multimedia.entity';
import { MultimediaApiService } from '../services/multimedia-api.service';

export default {
  components: {
    VideoList,
    VideoPlayer
  },
  data() {
    return {
      selectedVideoUrl: null,
      videos: [],
      multimediaApi: new MultimediaApiService(),
    };
  },
  created() {
    this.multimediaApi.getAll().then(res => {
      this.videos = res.data.map(Multimedia.fromResource);
    });
  },
  methods: {
    onSelect(url) {
      this.selectedVideoUrl = url;
    }
  }
}
</script>
<template>
  <div class="h-30rem flex flex-column md:flex-row w-full h-full gap-2">
    <video-player
      class="w-full h-full md:w-8"
      :url="selectedVideoUrl"
    />
    <pv-scroll-panel class="w-full h-15rem md:h-full md:w-4">
      <video-list
        :videos="videos"
        @on-select="onSelect"
      />
    </pv-scroll-panel>
  </div>
</template>
<style scoped>
    
</style>
