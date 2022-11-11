<template>
  <q-layout view="lHh Lpr lFf">
    <header-home :cart="cart" @update:cart="(newvalue) => (cart = newvalue)" />
    <q-drawer
      v-model="cart"
      show-if-above
      side="right"
      bordered
      behavior="mobile"
      class="drawer"
    >
      <content-drawer @handleDrawer="toggleRightDrawer()"></content-drawer>
    </q-drawer>
    <q-page-container class="page">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import ContentDrawer from "src/components/contentDrawer.vue";
import HeaderHome from "src/components/HeaderHome.vue";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: { HeaderHome, ContentDrawer },

  setup() {
    return {
      cart: ref(false),
      toggleRightDrawer() {
        this.cart = !this.cart;
      },
    };
  },
});
</script>

<style>
.page {
  padding-top: 0 !important;
}
.page-global {
  max-width: 1400px;
  margin: 0 auto;
}
.q-drawer {
  width: 500px !important;
}
@media (max-width: 900px) {
  .q-drawer {
    width: 100% !important;
  }
}
</style>
