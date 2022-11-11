<template>
  <div class="main">
    <div class="title" v-if="!checkout">
      <q-btn
        icon="close"
        rounded
        dense
        color="red"
        @click.stop.prevent="handleDrawer()"
      />
      <h4>Carrinho</h4>
      <q-icon name="shopping_cart" size="25px" />
    </div>
    <div class="total-product" v-if="checkout">
      <h6>
        Total:
        {{
          $store.getters["storeCart/valorTotal"].toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })
        }}
      </h6>
    </div>
    <div class="list-product">
      <item-cart-product
        v-for="product in products"
        v-bind:key="product.id"
        :product="product"
      />
    </div>
    <div class="total-product" v-if="!checkout">
      <h6>
        Total:
        {{
          $store.getters["storeCart/valorTotal"].toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })
        }}
      </h6>
    </div>
    <div class="actions-product" v-if="!checkout">
      <q-btn
        class="btn_carrinho"
        flat
        icon-right="shopping_cart"
        title=""
        @click.stop.prevent="$router.push('/checkout')"
        >Finalizar compra</q-btn
      >
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import ItemCartProduct from "./ItemCartProduct.vue";

export default defineComponent({
  components: {
    ItemCartProduct,
  },
  props: {
    checkout: Boolean,
    success: Boolean,
  },
  computed: {
    products() {
      return this.$store.state.storeCart.products;
    },
  },
  methods: {
    handleDrawer() {
      this.$emit("handleDrawer");
    },
  },
});
</script>

<style scoped lang="scss">
.main {
  flex: 1;
  height: 100%;
  display: flex;
  padding: 1px 10px 20px 10px;
  flex-direction: column;
  gap: 10px;
  & > .title {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
  & > .title > h4 {
    line-height: 0.001rem;
  }
  & > .list-product {
    flex: 1;
    flex-direction: column;
    display: flex;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    width: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    padding: 20px 0 20px 0;
    gap: 15px;
  }
  & > .total-product {
    height: 80px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  & > .actions-product {
    padding-top: 10px;
    padding-bottom: 10px;

    & > .btn_carrinho {
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
  }
}
</style>
