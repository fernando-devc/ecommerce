<template>
  <q-header class="header">
    <q-toolbar class="padding">
      <q-toolbar-title @click="$router.push('/')" style="cursor: pointer">
        <q-btn
          dense
          icon="home"
          rounded
          flat
          @click="$router.push('/')"
        ></q-btn>
        Ecommerce
      </q-toolbar-title>
      <q-btn
        flat
        round
        dense
        icon="shopping_cart"
        @click="$emit('update:cart', !cart)"
      />
    </q-toolbar>
  </q-header>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: ["cart"],
  emits: ["update:cart"],
});
</script>

<style scoped lang="scss">
.padding {
  padding: 0px 50px 0 50px;
}
.header {
  background: rgba(14, 13, 13, 0.568);
  box-shadow: 0 8px 32px 0 rgba(167, 24, 24, 0.37);
  backdrop-filter: blur(13.5px);
  -webkit-backdrop-filter: blur(13.5px);
  border-bottom: 1px solid rgba(167, 24, 24, 0.418);
  color: rgb(255, 255, 255);
  // position: fixed;
  @media (max-width: 600px) {
    position: sticky;
  }
}
</style>
