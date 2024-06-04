<script>
import ItemList from "@/multimedia/components/item-list.component.vue";
import { ResponsiveApiService } from "@/shared/services/responsive-api.service.js";
import { BookApiService } from "@/multimedia/services/book-api.service";
import { Book } from "../model/book.entity";

export default {
  components: {
    ItemList,
  },
  data() {
    return {
      responsiveApi: new ResponsiveApiService(),
      bookApi: new BookApiService(),
      books: [],
    };
  },
  created() {
    this.bookApi.getAll().then((res) => {
      this.books = res.data.map(Book.fromResource);
    });
  },
};
</script>
<template>
  <pv-scroll-panel class="w-full h-30rem">
    <item-list
      :items="books"
      :button-text="$t('library.read-more')"
    />
  </pv-scroll-panel>
</template>
<style scoped></style>
