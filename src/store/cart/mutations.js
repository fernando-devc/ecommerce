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
  console.log(state);
}
export function remove(state, payload) {
  const exist = state.products.find((o) => o.id === payload.id);
  state.products.splice(state.products.indexOf(exist), 1);
}
