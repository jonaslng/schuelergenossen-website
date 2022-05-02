export function getStoredCart(cookie) {
  if (cookie === null || cookie === undefined) {
    return [];
  } else {
    if (Array.isArray(cookie)) {
      return cookie;
    } else {
      return [];
    }
  }
}
export function getFormattedPrice(price) {
  if (price.toString().includes(".")) {
    return price.toString() + "0€";
  } else {
    return price.toString() + "€";
  }
}
