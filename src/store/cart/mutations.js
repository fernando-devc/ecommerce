export function increment(state, payload) {
  const exist = state.products.find((o) => o.id === payload.id);
  const newValue = {
    ...payload,
    qtd: 1,
  };
  if (exist) {
    exist.qtd += 1;
  } else {
    state.products.push(newValue);
  }
}
export function remove(state, payload) {
  const exist = state.products.find((o) => o.id === payload.id);
  state.products.splice(state.products.indexOf(exist), 1);
}

export function clearCart(state) {
  state.products = [];
  state.transaction = {};
}

export function addtransaction(state, payload) {
  state.transaction = payload;
}
