import { atom, useAtomValue, useSetAtom } from 'jotai';
import { getStorageValue } from '../utils/useLocalStorage';

export const themeAtom = atom<boolean>(getStorageValue<boolean>('designmode', false)); // false = světlé, true = tmavé

export const useThemeState = () => {
  // Implementace hooku pro získání stavu tématu (světlé/tmavé)
  const theme = useAtomValue<boolean>(themeAtom);
  const setTheme = useSetAtom(themeAtom);

  /**
   * Přepíná mezi světlým a tmavým režimem.
   *
   * - Uloží nový režim do `localStorage` pod klíčem `designmode`.
   * - Přepne stav `themeAtom` v Jotai.
   *
   * @returns {void}
   */
  const zmenaTheme = () => {
    setTheme((prev) => {
      const newMode = !prev;
      localStorage.setItem('designmode', JSON.stringify(newMode));
      return newMode;
    });
  };

  return { theme, zmenaTheme };
};
