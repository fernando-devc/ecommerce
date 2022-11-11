<template>
  <q-page>
    <hero-imager />
    <div class="page-global -top">
      <div class="flex flex-center flex-list">
        <card-product
          v-for="item in products"
          v-bind:key="item.id"
          :item="item"
        ></card-product>
      </div>
    </div>
  </q-page>
</template>

<script>
import { api } from "src/boot/axios";
import CardProduct from "src/components/CardProduct.vue";

import HeroImager from "src/components/HeroImager.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { CardProduct, HeroImager },
  name: "IndexPage",
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    const load = async () => {
      await api.get("/products").then((res) => {
        this.products = res.data;
      });
    };
    load();
  },
});
</script>
<style scoped lang="scss">
.card {
  height: 100px;
  width: 100px;
}
.-top {
  margin-top: -150px;
  z-index: 1000000;
}
.flex-list {
  gap: 15px;
  padding: 30px 0 30px 0;
}
@media (max-width: 600px) {
  .-top {
    margin-top: 0;
  }
}
</style>
