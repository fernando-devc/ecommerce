export function addProduct(context, payload) {
  context.commit("increment", payload);
}
export function removeProduct(context, payload) {
  context.commit("remove", payload);
}
export function addtransaction(context, payload) {
  context.commit("addtransaction", payload);
}
export function clearCart(context) {
  context.commit("clearCart");
}
