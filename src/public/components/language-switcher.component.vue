<script>
export default {
  name: "language-switcher",
  data() {
    return {
      languages: ['en', 'es']
    }
  }
}
</script>

<template>
  <pv-dropdown
    class="bg-transparent z-10"
    v-model="$i18n.locale"
    input-id="language-switch"
    :options="this.languages"
  />
</template>
