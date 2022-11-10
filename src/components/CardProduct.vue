<template>
  <q-card class="my-card" @click="routingProductPage(item.id)">
    <div class="image">
      <img :src="item.image" alt="product-img" />
    </div>
    <q-card-section>
      <div class="row no-wrap items-center">
        <div class="col title ellipsis">{{ item.title }}</div>
        <div
          class="col-auto text-grey text-caption q-pt-md row no-wrap items-center"
        ></div>
      </div>
      <q-rating v-model="stars" :max="5" size="20px" />
    </q-card-section>
    <q-card-section class="q-pt-none">
      <div class="text-subtitle1">
        {{
          item.price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })
        }}
      </div>
    </q-card-section>
    <q-card-actions class="action">
      <q-btn
        class="btn_carrinho"
        flat
        icon-right="shopping_cart"
        title=""
        @click.stop.prevent=""
        >Adicionar carrinho</q-btn
      >
    </q-card-actions>
  </q-card>
</template>

<script>
import { defineComponent } from "vue";
import { useRoute, useRouter } from "vue-router";
const router = useRouter();
const route = useRoute();
export default defineComponent({
  computed() {},
  data() {
    return {
      stars: this.item.rating.rate,
    };
  },
  props: {
    item: {},
  },
  mounted() {},
  methods: {
    routingProductPage: function (id) {
      this.$router.push("/product/" + id);
    },
  },
});
</script>

<style scoped lang="scss">
.my-card {
  width: 300px;
  cursor: pointer;
  overflow: hidden;
}
@media (max-width: 600px) {
  .my-card {
    width: 100% !important;
  }
}
.my-card:hover {
  transform: scale(1.01);
  // z-index: 50000;
}
.image {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  max-height: 200px;
  img {
    max-width: 100%;
    max-height: 200px;
  }
}
.description {
  // height: 50px;
  white-space: pre-wrap;
  // overflow: hidden;
}
.btn_carrinho {
  width: 100%;
  padding: 15px;
  border: none;
  background-color: #fc1927;
  font-weight: 700;
  font-size: 16px;
  color: #fff;
  border-radius: 15px;
  cursor: pointer;
  box-shadow: 0 8px 16px 0 rgb(255 72 66 / 24%);
}
.action {
  padding: 20px;
}
</style>
