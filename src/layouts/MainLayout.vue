<template>
  <q-layout view="lHh Lpr lFf">
    <header-home :cart="cart" @update:cart="(newvalue) => (cart = newvalue)" />
    <q-drawer
      v-model="cart"
      width="500"
      show-if-above
      side="right"
      bordered
      behavior="mobile"
    >
      <content-drawer></content-drawer>
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
      cart: ref(true),
      toggleRightDrawer() {
        cart.value = !cart.value;
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
</style>
