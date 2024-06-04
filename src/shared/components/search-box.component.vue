<script>
export default {
    props: {
        options: { type: Array, default: [], required: false }
    },
    data() {
        return {
            box: "",
            items: []
        }
    },
    methods: {
        search(event) {
            const query = event.query;
            this.items = this.options.filter(option => option.includes(query))
        },

        getSelected(){
            return this.box;
        }
    }
}
</script>

<template>
    <pv-autocomplete placeholder="Search" inputLabel="ac" v-model="this.box" completeOnFocus :suggestions="this.items" @complete="this.search">
    </pv-autocomplete>
</template>

<style>
input {
    background-color: var(--search-background);
    border-color: var(--search-background);
    padding-block: 0;

    background-image: url("../../node_modules/primeicons/raw-svg/search.svg");
    background-size: 1.1rem;;
    background-position: 6px;
    background-repeat: no-repeat;
    text-indent: 20px;
}
input::placeholder{
   color: var(--search-background-placeholder);
}
</style>