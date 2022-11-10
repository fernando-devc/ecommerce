export function addProduct(context, payload) {
  console.log(payload);
  context.commit("increment", payload);
}
export function removeProduct(context, payload) {
  console.log(payload);
  context.commit("remove", payload);
}
