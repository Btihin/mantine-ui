import { useState, useEffect } from 'react';

/**
 * Funkce pro žískání hodnoty z localstorage, nebo výhozí hodnoty.
 * Funkce není určena pro SSR (server side rendering).
 * @param key klíč pro storage
 * @param defaultValue výchozí hodnota - pokud nebude nalezeno bude použita výchozí hodnota
 * @returns hodnota ze storage nebo defaultValue
 */
export function getStorageValue<T>(key: string, defaultValue: T): T {
  // getting stored value
  try {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(key);
      defaultValue = saved !== null ? JSON.parse(saved) : defaultValue;
      return defaultValue;
    }
  } catch {
    return defaultValue;
  }
}

export const useLocalStorage = (key: string, defaultValue: any) => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });

  useEffect(() => {
    // storing input name
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
