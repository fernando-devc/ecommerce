<template>
  <div class="spacer"></div>
  <div class="row">
    <div class="col-75">
      <div class="container">
        <form v-on:submit="handlesubmit">
          <div class="row">
            <div class="col-50">
              <h3>Informações</h3>
              <label for="fname">Nome Completo</label>
              <input
                type="text"
                id="fname"
                name="fullname"
                placeholder="Fernando Costa"
                required
              />
              <label for="email"> Email</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="fernando@example.com"
                required
              />
              <label for="adr"> Endereço</label>
              <input
                type="text"
                id="adr"
                name="address"
                placeholder="Rua , 6565 - Bairro"
                required
              />
              <label for="city">Cidade</label>
              <input
                type="text"
                id="city"
                name="city"
                placeholder="Porto Velho"
                required
              />
              <div class="row">
                <div class="col-50">
                  <label for="state">Estado </label>

                  <input
                    type="text"
                    id="state"
                    name="state"
                    placeholder="Ro"
                    required
                  />
                </div>
                <div class="col-50">
                  <label for="zip">Cep</label>
                  <input
                    type="text"
                    id="zip"
                    name="zip"
                    placeholder="000007"
                    required
                  />
                </div>
              </div>
            </div>
            <div class="col-50">
              <h3>Pagamento</h3>
              <label for="cname">Nome inscrito</label>
              <input
                type="text"
                id="cname"
                name="cardname"
                placeholder="Fernando Costa"
                required
              />
              <label for="ccnum">Numero do cartão</label>
              <input
                type="text"
                id="ccnum"
                name="cardnumber"
                placeholder="1111-2222-3333-4444"
                required
              />
              <label for="expmonth">Mês </label>
              <input
                type="text"
                id="expmonth"
                name="expmonth"
                placeholder="12"
                required
              />

              <div class="row">
                <div class="col-50">
                  <label for="expyear">Ano</label>
                  <input
                    type="text"
                    id="expyear"
                    name="expyear"
                    placeholder="2018"
                    required
                  />
                </div>
                <div class="col-50">
                  <label for="cvv">CVV</label>
                  <input
                    type="text"
                    id="cvv"
                    name="cvv"
                    placeholder="352"
                    required
                  />
                </div>
                <div class="section-select row">
                  <label for="cvv">Parcelamento</label>
                  <select class="select" name="quota">
                    <option>Parcelamento</option>
                    <option :value="'1x de ' + handlechangeparcela(1)">
                      1x de
                      {{
                        handlechangeparcela(1).toLocaleString("pt-br", {
                          style: "currency",
                          currency: "BRL",
                        })
                      }}
                    </option>
                    <optgroup v-if="parseInt(valor) > 50">
                      <option :value="'2x de ' + handlechangeparcela(2)">
                        2x de
                        {{
                          handlechangeparcela(2).toLocaleString("pt-br", {
                            style: "currency",
                            currency: "BRL",
                          })
                        }}
                      </option>
                      <option :value="'3x de ' + handlechangeparcela(3)">
                        3x de
                        {{
                          handlechangeparcela(3).toLocaleString("pt-br", {
                            style: "currency",
                            currency: "BRL",
                          })
                        }}
                      </option>
                      <option :value="'4x de ' + handlechangeparcela(4)">
                        4x de
                        {{
                          handlechangeparcela(4).toLocaleString("pt-br", {
                            style: "currency",
                            currency: "BRL",
                          })
                        }}
                      </option>
                      <option :value="'5x de ' + handlechangeparcela(5)">
                        5x de
                        {{
                          handlechangeparcela(5).toLocaleString("pt-br", {
                            style: "currency",
                            currency: "BRL",
                          })
                        }}
                      </option>
                      <option :value="'6x de ' + handlechangeparcela(6)">
                        6x de
                        {{
                          handlechangeparcela(6).toLocaleString("pt-br", {
                            style: "currency",
                            currency: "BRL",
                          })
                        }}
                      </option>
                      <option :value="'7x de ' + handlechangeparcela(7)">
                        7x de
                        {{
                          handlechangeparcela(7).toLocaleString("pt-br", {
                            style: "currency",
                            currency: "BRL",
                          })
                        }}
                      </option>
                      <option :value="'8x de ' + handlechangeparcela(8)">
                        8x de
                        {{
                          handlechangeparcela(8).toLocaleString("pt-br", {
                            style: "currency",
                            currency: "BRL",
                          })
                        }}
                      </option>
                      <option :value="'9x de ' + handlechangeparcela(9)">
                        9x de
                        {{
                          handlechangeparcela(9).toLocaleString("pt-br", {
                            style: "currency",
                            currency: "BRL",
                          })
                        }}
                      </option>
                      <option :value="'10x de ' + handlechangeparcela(10)">
                        10x de
                        {{
                          handlechangeparcela(10).toLocaleString("pt-br", {
                            style: "currency",
                            currency: "BRL",
                          })
                        }}
                      </option>
                    </optgroup>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="actions-product" v-if="!checkout">
            <q-btn
              class="btn_carrinho"
              flat
              icon-right="shopping_cart"
              title=""
              type="submit"
              >Comprar
            </q-btn>
          </div>
        </form>
      </div>
    </div>
    <!-- {{ valor }} -->
    <div class="col-25">
      <content-drawer :checkout="true" />
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
    handlechangeparcela(parc) {
      let total = this.$store.getters["storeCart/valorTotal"];
      return total / parc;
    },
    handlesubmit(event) {
      event.preventDefault();
      const form = new FormData(event.target);
      const transaction = {
        fullname: form.get("fullname"),
        email: form.get("email"),
        address: form.get("addres"),
        city: form.get("city"),
        state: form.get("state"),
        zip: form.get("zip"),
        quota: form.get("quota").toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        }),
        card: {
          cardname: form.get("cardname"),
          cardnumber: form.get("cardnumber"),
        },
        products: this.$store.state.storeCart.products,
      };
      this.$store.dispatch("storeCart/addtransaction", transaction);
      this.$router.push("/success");
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

.col-50 {
  -ms-flex: 50%;
  flex: 50%;
}

.col-75 {
  -ms-flex: 50%;
  flex: 50%;
}

.col-25,
.col-50,
.col-75 {
  padding: 0 16px;
}

.container {
  background-color: #f2f2f2;
  padding: 5px 20px 15px 20px;
  border: 1px solid lightgrey;
  border-radius: 3px;
}

input[type="text"] {
  width: 100%;
  margin-bottom: 20px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

label {
  margin-bottom: 10px;
  display: block;
}

.icon-container {
  margin-bottom: 20px;
  padding: 7px 0;
  font-size: 24px;
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
.section-select {
  margin: 0;
  width: 100%;
  & > select {
    width: 100%;
    margin: 0;
    background: #fff;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 3px;
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
