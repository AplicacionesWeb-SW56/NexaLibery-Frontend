<script>
export default {
    name: "recently-viewed",
    props: {
        items: Array
    }
}
</script>

<template>
    <div>
        <p style="text-align: center;">Recently Viewed</p>
        <pv-carousel class="rv-carousel" :value="this.items" :numVisible="3" :numScroll="1">
            <template #item="item">
                <pv-image :src="item.data" alt="image" width="150px" preview />
            </template>
        </pv-carousel>
    </div>
</template>

<style>
:root {
    --bg-color: #2b4352;
}

p {
  font-family: "Andada Pro";
  font-weight: 500;
  font-size: 1.5rem;
  margin-block: 10px;
}

.rv-carousel{
    border: #e2e8f0 1px solid;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 15px;
    padding-block-start: 30px;
}

</style>