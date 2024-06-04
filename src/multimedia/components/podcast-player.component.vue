<script>
  export default {
    name:"podcast-player",
    props: {
      url: String,
    }
  }
</script>

<template>
  <div class="w-full h-full">
    <iframe
      class="w-full h-full"
      :src="url"
      title="podcast player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    />
  </div>
</template>

<style scoped>
</style>
