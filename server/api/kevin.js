export default defineEventHandler(async (event) => {
  const { data } = await $fetch(
    "https://api.currencyapi.com/v3/latest?apikey=cur_live_itgFUB5mnb7CkUjCDclxTGuPiGHLI5ThABXK122b"
  );

  return data;
});
