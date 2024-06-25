<script>
import ItemList from "@/multimedia/components/item-list.component.vue";
import { ResponsiveApiService } from "@/shared/services/responsive-api.service.js";
import { PodcastApiService } from "@/multimedia/services/podcast-api.service.js";
import PodcastPlayer from "@/multimedia/components/podcast-player.component.vue";
import { Podcast } from "../model/podcast.entity";

export default {
  components: {
    ItemList,
    PodcastPlayer,
  },
  data() {
    return {
      responsiveApi: new ResponsiveApiService(),
      podcastApi: new PodcastApiService(),
      podcasts: [],
      currentPodcast: null,
    };
  },
  created() {
    this.podcastApi.getAll().then((res) => {
      this.podcasts = res.data.map(Podcast.fromResource)
    });
  },
  methods: {
    playPodcast(podcast) {
      this.currentPodcast = podcast;
    },
  },
};
</script>
<template>
  <pv-scroll-panel class="w-full pb-5 h-28rem">
    <item-list
      :items="podcasts"
      :button-text="$t('podcast.play')"
      @click="playPodcast"
    />
  </pv-scroll-panel>
  <podcast-player
    :url="currentPodcast"
    class="fixed z-1 w-full h-8rem bottom-0 left-0"
  />
</template>
<style scoped></style>
