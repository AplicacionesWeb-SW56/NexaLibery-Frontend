<script>
import RecentlyViewed from '@/nexalibery/components/recentlyViewed.component.vue';
import MyFavorites from '@/nexalibery/components/myFavorites.component.vue';
import MyCategories from '@/nexalibery/components/myCategories.component.vue';

// borrar
const generateRandomImages = (seed) => {
    if (seed == 0) seed = "";
    const images = new Array(9);
    for (let index = 0; index < 9; index++) {
        images[index] = `https://picsum.photos/360?random=${seed}${index}`;
    }
    return images;
}

const generateRandomCategories = (seed) => {
    let images = generateRandomImages(seed);
    let categories = {};
    return images.map((img, index) => {
        return {
            url: img,
            name: `category ${index + 1}`
        }
    })
}

export default {
    name: "home",
    components: { RecentlyViewed, MyFavorites, MyCategories },
    data() {
        return {
            userName: "Unkwnown",
            recentlyViewedItems: generateRandomImages(0),
            myFavoritesItems: generateRandomImages(1),
            myCategoriesItems: generateRandomCategories(2)
        }
    }
}
</script>

<template>
    <div class="main">
        <h2>Welcome Again, @<span>{{ this.userName }}</span></h2>
        <div class="sections">
            <div class="main-rows">
                <recently-viewed style="width: 600px;" :items="this.recentlyViewedItems"></recently-viewed>
                <my-favorites style="width: 600px;" :items="this.myFavoritesItems"></my-favorites>
            </div>
            <div>
                <my-categories style="height: 580px" :items="this.myCategoriesItems"></my-categories>
            </div>
        </div>
    </div>
</template>

<style>
.main {
    display: flex;
    flex-direction: column;
    margin-inline: 50px;
}

.sections {
    display: flex;
    flex-direction: row;
    gap: 15px;
}

.main-rows {
    display: flex;
    flex-direction: column;
    gap: 25px;
}
</style>