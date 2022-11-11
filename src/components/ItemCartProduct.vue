<template>
  <div class="card">
    <div class="img">
      <img :src="product.image" alt="img-produto" />
    </div>
    <div class="description">
      <strong>{{ product.title.slice(0, 60) }}</strong>
      <p>
        {{
          product.price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })
        }}
      </p>
      <div class="section_qtd">
        <label for="input_qtd"> Quantidade: </label>
        <input :value="product.qtd" id="input_qtd" type="number" />
      </div>
    </div>
    <div class="actions">
      <q-btn
        rounded
        v-if="!succes"
        flat
        dense
        icon="delete"
        class="btn-delete"
        @click="removetocart(product)"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      qtd: this.product.qtd,
    };
  },
  props: {
    product: {},
  },

  computed: {
    succes() {
      if (this.$route.path === "/success") {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    removetocart(product) {
      this.$store.dispatch("storeCart/removeProduct", product);
    },
  },
});
</script>

<style scoped lang="scss">
.card {
  width: 100%;
  max-height: 100px;
  display: flex;
  gap: 10px;
  & > .img {
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    & > img {
      height: auto;
      max-height: 100%;
      max-width: 100%;
    }
  }
  & > .description {
    flex: 1;
    & > .section_qtd {
      & > input {
        width: 50px;
        border-radius: 5px;
        border: solid 0.5px gray;
        text-align: center;
        font-weight: 500;
      }
    }
  }
  & > .actions {
    width: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    & > .btn-delete {
      color: red;
    }
  }
}
</style>
