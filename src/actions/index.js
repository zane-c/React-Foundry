export const PUT_IN_STORE = '@store/PUT_IN_STORE';
export const putInStore = (key, value) => ({
  type: PUT_IN_STORE,
  key,
  value,
});
