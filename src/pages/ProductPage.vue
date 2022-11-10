<template>
  <q-page class="flex page container">
    <div class="left-column">
      <img :src="product.image" alt="" />
    </div>
    <div class="right-column">
      <div class="product-description">
        <span>{{ product.category }}</span>
        <h5>{{ product.title }}</h5>
        <p>
          {{ product.description.slice(0, 300) }}
        </p>
      </div>
      <!-- <div class="spacer"></div> -->
      <q-rating v-model="product.rating.rate" :max="5" size="30px" />

      <div class="product-price">
        <h4>
          {{
            product.price.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })
          }}
        </h4>
      </div>
      <q-btn
        flat
        icon-right="shopping_cart"
        title=""
        @click.stop.prevent="addtocart(product)"
        class="cart-btn"
      >
        Adicionar
      </q-btn>
    </div>
  </q-page>
</template>

<script>
import { api } from "src/boot/axios";
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      product: {
        description: "",
        price: "",
        rating: {
          rate: 0,
        },
        // stars: this.product.rating.rate,
      },
    };
  },
  mounted() {
    const load = async () => {
      const params = this.$route.params.slug;
      await api.get("products/" + params).then((res) => {
        this.product = res.data;
        console.log(res.data);
      });
    };
    load();
  },
  methods: {
    addtocart(product) {
      this.$store.dispatch("storeCart/addProduct", product);
    },
  },
});
</script>

<style scoped lang="scss">
.spacer {
  flex: 1;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px;
  display: flex;
  padding-top: 100px !important;
}
.left-column {
  flex: 1;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.right-column {
  flex: 1;
  padding-top: 60px;
  padding-bottom: 60px;
  display: flex;
  flex-direction: column;
}
.left-column img {
  max-width: 100%;
  max-height: 100%;
  transition: all 0.3s ease;
}

.product-description {
  border-bottom: 1px solid #e1e8ee;
  margin-bottom: 20px;
}
.product-description span {
  font-size: 12px;
  color: #358ed7;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-decoration: none;
}
.product-description h1 {
  font-weight: 300;
  font-size: 52px;
  color: #43484d;
  letter-spacing: -2px;
}
.product-description p {
  font-size: 16px;
  font-weight: 300;
  color: #86939e;
  line-height: 24px;
}

.product-price {
  display: flex;
  align-items: center;
}

.product-price span {
  font-size: 26px;
  font-weight: 300;
  color: #43474d;
  margin-right: 20px;
}

.cart-btn {
  width: 100%;
  padding: 15px;
  border: none;
  background-color: #fc1927;
  font-weight: 700;
  font-size: 16px;
  color: #fff;
  border-radius: 15px;
  text-align: center;
  cursor: pointer;
  box-shadow: 0 8px 16px 0 rgb(255 72 66 / 24%);
  text-decoration: none;
  padding: 12px 30px;
  transition: all 0.5s;
}
.cart-btn:hover {
  background-color: #fc1927;
}
@media (max-width: 940px) {
  .container {
    flex-direction: column;
    // margin-top: 60px;
  }

  .left-column,
  .right-column {
    width: 100%;
  }

  .left-column img {
    width: 300px;
    right: 0;
    top: -65px;
    left: initial;
  }
}

@media (max-width: 535px) {
  .left-column img {
    width: 220px;
    top: -85px;
  }
}
</style>
