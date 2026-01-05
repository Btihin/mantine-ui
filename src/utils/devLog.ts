/**
 * Funkce logování pro develop.
 * Log by neměl být vypsán na produkci
 */
export const devlog = (text: string, objekt?: any) => {
  if (import.meta.env.DEV) {
    console.log(text, objekt ? objekt : '');
  }
};
