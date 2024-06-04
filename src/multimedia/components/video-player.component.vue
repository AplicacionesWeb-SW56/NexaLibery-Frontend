<script>
  export default {
    name:"video-player",
    props: {
      url: String,
    }
  }
</script>

<template>
  <div class="w-full h-full z-0">
    <iframe
      class="w-full h-full"
      :src="url"
      title="video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    />
  </div>
</template>

<style scoped>
div {
  background-image: url("https://i.imgur.com/2lLleKJ.jpeg");
  background-size: cover;
  background-position: center;
}
</style>
