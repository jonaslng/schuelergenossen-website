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
