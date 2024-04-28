<script>
export default {
    name: "my-categories",
    props: {
        items: Array
    }
}
</script>

<template>
    <div style="overflow: hidden;">
        <p style="text-align: center;">My Categories</p>
        <div class="cards"  style="height:90%; overflow-y: auto;">
            <pv-button v-for="item in this.items">
                <pv-image :src="item.url" width="150px" alt="image"></pv-image>
                <p>{{ item.name }}</p>
            </pv-button>
        </div>
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

.p-button {
    display: flex;
    flex-direction: column;
    margin-block: 10px;
    color: black;
    background-color: transparent;
    border: none;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}

.cards{
    border: #e2e8f0 1px solid;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 15px;
    padding-block-start: 30px;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
}

</style>