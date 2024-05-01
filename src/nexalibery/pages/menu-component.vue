<script>
// Utils
const generateBookImages = (type) => {
  const imageSets = {
    recentlyViewed: [
      "https://www.planetadelibros.com/usuaris/libros/thumbs/24fb5128-9aaf-4802-8222-047db4b93ef3/d_295_510/portada_el-senor-de-los-anillos_j-r-r-tolkien_201601252224.webp",
      "https://bibliotecanacional.gov.co/es-co/colecciones/biblioteca-digital/gaboteca/Imagenes/Primeros%20cien%20a%C3%B1os.jpg",
      "https://tazasyportadas.com/cdn/shop/products/51xSb8bH2CL._SX308_BO1_204_203_200.jpg?v=1659625858"
    ],
    myFavorites: [
      "https://image.cdn1.buscalibre.com/5b57fc1690f0b5295a8b4567.RS500x500.jpg",
      "https://www.planetadelibros.com/usuaris/libros/thumbs/d0a7d172-4365-4625-99a5-4868259c35e5/d_295_510/portada_el-codigo-da-vinci_dan-brown_201706061655.webp",
      "https://www.planetadelibros.com/usuaris/libros/thumbs/54e8361f-d68d-4462-84c6-d06ef130f5ae/d_295_510/portada_el-alquimista_paulo-coelho_201612191218.webp"
    ],
    myCategories: [
      "https://www.tipos.co/wp-content/uploads/2014/12/libros-e1418401625913.jpg",
      "https://m.media-amazon.com/images/I/21MC0f27QQL.png",
      "https://media.cdnandroid.com/item_images/829032/imagen-podcast-player-0ori.jpg"
    ]
  };

  return imageSets[type] || [];
};

const generateRandomCategories = () => {
  const images = generateBookImages('myCategories');
  return images.map((img, index) => ({
    url: img,
    name: `Category ${index + 1}`
  }));
};

import RecentlyViewed from "@/nexalibery/pages/recentlyViewed.component.vue";
import MyFavorites from "@/nexalibery/pages/myFavorites.component.vue";
import MyCategories from "@/nexalibery/pages/myCategories.component.vue";

export default {
  name: "home",
  components: {
    RecentlyViewed,
    MyFavorites,
    MyCategories
  },
  data() {
    return {
      userName: "Unknown"
    };
  },
  computed: {
    recentlyViewedItems() {
      return generateBookImages('recentlyViewed');
    },
    myFavoritesItems() {
      return generateBookImages('myFavorites');
    },
    myCategoriesItems() {
      return generateRandomCategories();
    }
  }
}
</script>

<template>
  <div class="main">
    <h2>Welcome Again, @<span>{{ userName }}</span></h2>
    <div class="sections">
      <div class="main-rows">
        <RecentlyViewed :items="recentlyViewedItems" />
        <MyFavorites :items="myFavoritesItems" />
      </div>
      <MyCategories :items="myCategoriesItems" style="height: 1000px;" />
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
