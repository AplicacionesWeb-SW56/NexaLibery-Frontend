<script>
export default {
    name: 'validator-form-message',
    props: {
        valid: Boolean,
        label: String
    }
}
</script>
<template>
  <pv-inline-message 
    class="justify-content-start gap-2"
    :style="{
      display: this.valid?'none':'flex'
    }"
  >
    {{ this.label }}
  </pv-inline-message>
</template>
<style scoped></style>
