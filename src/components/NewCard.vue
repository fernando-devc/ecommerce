<template>
  <div class="card">
    <div class="imgBox">
      <img
        src="https://www.corsair.com/corsairmedia/sys_master/productcontent/CH-9300011-NA-M65_PRO_RGB_BLK_04.png"
        alt="mouse corsair"
        class="mouse"
      />
    </div>

    <div class="contentBox">
      <h3>Mouse Corsair M65</h3>
      <h2 class="price">61.<small>98</small> €</h2>
      <a href="#" class="buy">Buy Now</a>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useRoute, useRouter } from "vue-router";
const router = useRouter();
const route = useRoute();
export default defineComponent({
  computed() {},
  data() {
    return {
      stars: this.item.rating.rate,
    };
  },
  props: {
    item: {},
  },
  mounted() {},
  methods: {
    routingProductPage: function (id) {
      this.$router.push("/product/" + id);
    },
  },
});
</script>

<style scoped lang="scss">
.card {
  position: relative;
  width: 320px;
  height: 480px;
  background: #191919;
  border-radius: 20px;
  overflow: hidden;
}

.card::before {
  content: "";
  position: absolute;
  top: -50%;
  width: 100%;
  height: 100%;
  background: #ffce00;
  transform: skewY(345deg);
  transition: 0.5s;
}

.card:hover::before {
  top: -70%;
  transform: skewY(390deg);
}

.card::after {
  content: "CORSAIR";
  position: absolute;
  bottom: 0;
  left: 0;
  font-weight: 600;
  font-size: 6em;
  color: rgba(0, 0, 0, 0.1);
}

.card .imgBox {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  z-index: 1;
}
/*
.card .imgBox img {
    max-width: 100%;

    transition: .5s;
}

.card:hover .imgBox img {
    max-width: 50%;

}
*/
.card .contentBox {
  position: relative;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 2;
}

.card .contentBox h3 {
  font-size: 18px;
  color: white;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.card .contentBox .price {
  font-size: 24px;
  color: white;
  font-weight: 700;
  letter-spacing: 1px;
}

.card .contentBox .buy {
  position: relative;
  top: 100px;
  opacity: 0;
  padding: 10px 30px;
  margin-top: 15px;
  color: #000000;
  text-decoration: none;
  background: #ffce00;
  border-radius: 30px;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: 0.5s;
}

.card:hover .contentBox .buy {
  top: 0;
  opacity: 1;
}

.mouse {
  height: 300px;
  width: auto;
}
</style>
