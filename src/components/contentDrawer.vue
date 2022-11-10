<template>
  <div class="main">
    <div class="title">
      <h4>Carrinho</h4>
      <q-icon name="shopping_cart" size="25px" />
    </div>
    <div class="list-product"></div>
    <div class="total-product"></div>
    <div class="actions-product">
      <q-btn
        class="btn_carrinho"
        flat
        icon-right="shopping_cart"
        title=""
        @click.stop.prevent=""
        >Finalizar compra</q-btn
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.main {
  flex: 1;
  height: 100%;
  display: flex;
  padding: 1px 10px 20px 10px;
  flex-direction: column;
  & > .title {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
  & > .title > h4 {
    line-height: 1rem;
  }
  & > .list-product {
    flex: 1;
    flex-direction: column;
    display: flex;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
  & > .total-product {
    height: 80px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
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
