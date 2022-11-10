import { store } from "quasar/wrappers";
import { createStore } from "vuex";
import storeCart from "./cart";
export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      storeCart,
    },
    strict: process.env.DEBUGGING,
  });

  return Store;
});
