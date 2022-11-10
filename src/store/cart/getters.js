export function valorTotal(state) {
  let total = 0;
  state.products.forEach((item) => {
    total += item.price * item.qtd;
  });
  return total;
}
