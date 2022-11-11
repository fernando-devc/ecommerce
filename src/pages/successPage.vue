<template>
  <div class="spacer"></div>
  <div class="row">
    <div class="col-75">
      <div class="container">
        <div class="icon-check">
          <q-icon name="check" size="100px" />
        </div>
        <h3>Pedido Realizado com sucesso</h3>
        <strong
          >Total:
          {{
            valor.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })
          }}</strong
        >
        <strong
          >Parcelamento:
          {{
            $store.state.storeCart.transaction.quota
              ? $store.state.storeCart.transaction.quota.split("x de ")[0] +
                "x de " +
                parseInt(
                  $store.state.storeCart.transaction.quota.split("x de ")[1]
                ).toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })
              : ""
          }}</strong
        >
        <strong>Nome: {{ $store.state.storeCart.transaction.fullname }}</strong>
        <div class="actions-product" v-if="!checkout">
          <q-btn
            class="btn_carrinho"
            flat
            icon-right="home"
            title=""
            @click="handlefinal"
            >Volta as Compras
          </q-btn>
        </div>
      </div>
    </div>

    <div class="col-25">
      <content-drawer :checkout="true" :success="true" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import contentDrawer from "src/components/contentDrawer.vue";

export default defineComponent({
  components: { contentDrawer },
  data() {
    return {
      parc: true,
    };
  },
  computed: {
    valor() {
      return this.$store.getters["storeCart/valorTotal"];
    },
  },
  mounted() {
    if (parseInt(this.valor) > 50) {
      this.parc = true;
    } else {
      this.parc = false;
    }
  },
  methods: {
    handlefinal() {
      this.$router.push("/");
      this.$store.dispatch("storeCart/clearCart");
    },
  },
});
</script>

<style scoped lang="scss">
.spacer {
  height: 100px;
}
.row {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin: auto;
  max-width: 1400px;
}

.col-25 {
  -ms-flex: 25%;
  flex: 25%;
}

.col-75 {
  -ms-flex: 50%;
  flex: 50%;
}

.col-75 {
  padding: 0 16px;
}
.actions-product {
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
.container {
  background-color: #f2f2f2;
  padding: 5px 20px 15px 20px;
  border: 1px solid lightgrey;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  & > .icon-check {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: green;
  }
  & > h3 {
    color: green;
  }
}

@media (max-width: 1141px) {
  .spacer {
  }
  .row {
    flex-direction: column-reverse;
  }
  .col-25 {
    margin-bottom: 20px;
  }
}
</style>
