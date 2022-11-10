<template>
  <div class="spacer"></div>
  <div class="row">
    <div class="col-75">
      <div class="container">
        <form action="/action_page.php">
          <div class="row">
            <div class="col-50">
              <h3>Informações</h3>
              <label for="fname">Nome Completo</label>
              <input
                type="text"
                id="fname"
                name="firstname"
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
              </div>
            </div>
          </div>
          <div class="actions-product" v-if="!checkout">
            <q-btn
              class="btn_carrinho"
              flat
              icon-right="shopping_cart"
              title=""
              @click.stop.prevent="$router.push('/checkout')"
              >Comprar
            </q-btn>
          </div>
        </form>
      </div>
    </div>

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
});
</script>

<style scoped lang="scss">
.spacer {
  height: 100px;
}
.row {
  display: -ms-flexbox; /* IE10 */
  display: flex;
  -ms-flex-wrap: wrap; /* IE10 */
  flex-wrap: wrap;
  margin: auto;
  max-width: 1400px;
}

.col-25 {
  -ms-flex: 25%; /* IE10 */
  flex: 25%;
}

.col-50 {
  -ms-flex: 50%; /* IE10 */
  flex: 50%;
}

.col-75 {
  -ms-flex: 50%; /* IE10 */
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

.btn {
  background-color: #04aa6d;
  color: white;
  padding: 12px;
  margin: 10px 0;
  border: none;
  width: 100%;
  border-radius: 3px;
  cursor: pointer;
  font-size: 17px;
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
.btn:hover {
  background-color: #45a049;
}

span.price {
  float: right;
  color: grey;
}

/* Responsive layout - when the screen is less than 800px wide, make the two columns stack on top of each other instead of next to each other (and change the direction - make the "cart" column go on top) */
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
