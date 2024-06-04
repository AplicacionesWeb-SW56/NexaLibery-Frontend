<script>
import VideoCard from '@/multimedia/components/video-card.component.vue';

export default {
  name: "video-list",
  emits: ["on-select"],
  components: {
    VideoCard
  },
  props: {
    videos: Array,
  },
  methods: {
    onSelect(url) {
      this.$emit('on-select', url);
    }
  }
};
</script>

<template>
  <div class="flex flex-row gap-1 p-1 flex-wrap justify-content-evenly">
    <video-card
      v-for="(video, index) in videos"
      :key="index"
      :pic="video.pic"
      :description="video.description"
      :title="video.title"
      :url="video.url"
      :premium="video.premium"
      @click="onSelect(video.url)"
    />
  </div>
</template>

<style scoped></style>
