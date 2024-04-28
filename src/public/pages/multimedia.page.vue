<script>
export default {
  name: "multimedia",
  title: "Multimedia"
}
</script>


<template>

  <div class="search">
    <h1> </h1>
    <pv-icon-field icon-position="left">
      <pv-input-icon class="pi pi-search"> </pv-input-icon>
      <pv-input-text id="inp" class="$style.input" placeholder="Search"></pv-input-text>
    </pv-icon-field>
    <h1> </h1>
  </div>

</template>

<style>
.search{
  margin-left: 70px;
}
#inp{
  background-color: #6cb2ce;
  border-radius: 20px;
}
</style>