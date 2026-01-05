import { getDatumCasStringNull, getDatumStringNull } from './localization/DateTimeUtils';
import { getNumberString } from './localization/numbers';

type NonUndefined<T> = T extends undefined ? never : T;
export const NEVYPLNENO = 'Nevyplněno';
export const isEmpty = (object: object) => {
  return Object.keys(object).length === 0 ? true : false;
  // for (const property in object) {
  //   if (value.hasOwnProperty(prop)) return false;
  // }
  // return true;
};

/**
 * Metoda pro ověření hodnoty, případě že hodnata neexistuje, doplní Nevyplněno
 * @param value Jakákoliv hodnota například z API
 * @returns Vračí hodnotu nebo string 'Nevyplněno'
 */
export const getValue = <T>(value: T): string | NonNullable<T> => {
  return value === null || value === undefined ? NEVYPLNENO : value;
};

/**
 * Metoda pro ověření hodnoty, případě že hodnata neexistuje, doplní Nevyplněno
 * @param value Jakákoliv hodnota například z API
 * @returns Vračí hodnotu nebo string NEVYPLNENO
 */
export const getTextString = <T>(value: T): string => {
  return value === null || value === undefined ? NEVYPLNENO : String(value);
};

/**
 * Metoda pro ověření hodnoty boolean
 * @param value Hodnota boolean
 * @returns Vrací hodnotu 'Ano', 'Ne' nebo NEVYPLNENO
 */
export const getBoolString = (value: unknown) => {
  return value === null || value === undefined ? NEVYPLNENO : value ? 'Ano' : 'Ne';
};

/**
 * Metoda pro ověření hodnoty boolean
 * @param value Hodnota boolean
 * @returns Vrací hodnotu 'true', 'false' nebo null
 */
export const getBoolValue = <T>(value: T): null | NonNullable<Boolean> => {
  if (value === null || value === undefined) {
    return null;
  } else if (typeof value !== 'boolean') {
    return null;
  }
  return value;
};

/**
 * Metoda která ověří, jestli byla změněna hodnota a pokud se nemění vrací null
 * @param valueNew Nová hodnota
 * @param valueOld Současná hodnota
 * @returns Vrací pouze nevou hodnotu pokud se změnila, jinak null
 */
export const getChangeValue = (valueNew: any, valueOld: any) => {
  return valueNew === valueOld ? null : valueNew;
};

/**
 * Metoda, která ověří generickou hodnotu a pokud není definována vrátí null
 * @param value Generická hodnota
 * @returns Vrací generickou hodnotu nebo null
 */
export const getValueOrNull = <T>(value: T): null | NonNullable<T> => {
  return value != undefined && value != '' ? value : null;
};

/** Examples 
 * 
 * Jednoduchá komponenta s paramentrem
 *   const NadpisSekce: React.FC<{ title: string }> = (props): JSX.Element => {
    return (
      <Typography variant='h5' component={'div'}>
        {props.title}
      </Typography>
    );
  };
 * 
 */

//#region Value type ‾‾‾▼‾‾‾▼‾‾‾▼‾‾‾▼‾‾‾▼‾‾‾▼‾‾‾▼‾‾‾▼‾‾‾▼‾‾‾▼‾‾‾▼‾‾‾▼‾‾‾▼‾‾‾▼‾‾‾▼‾‾‾▼‾‾‾▼‾‾‾▼‾‾‾▼‾‾‾▼‾‾‾▼

export enum Format {
  Text = 'text',
  Cislo = 'cislo',
  Boolean = 'boolean',
  Datum = 'datum',
  DatumCas = 'datumCas',
}
export type DataType = 'text' | 'cislo' | 'boolean' | 'datum' | 'datumCas';
// | Format.Text
// | Format.Cislo
// | Format.Boolean
// | Format.Datum
// | Format.DatumCas;

/**
 * Funkce pro ověření a naformátovaní hodnoty
 * @param {unknown} value hodnota přicházející z API
 * @param {DataType} typ předpokládaný typ hodnoty, do které by se daná hodnota měla naformátovat
 * @returns Vrací řetězec zastupující prázdnou hodnotu nebo textovou hodnotu daného typu
 */
export const getValueFromApi = (value: unknown, typ: DataType): string => {
  switch (typ) {
    case Format.Cislo:
      return getNumberString(value);
    case Format.Datum:
      return getDatumStringNull(value);
    case Format.DatumCas:
      return getDatumCasStringNull(value);
    case Format.Text:
      return getTextString(value);
    case Format.Boolean:
      return getBoolString(value);
    default:
      return getTextString(value);
  }
};
//#endregion Value type ▲___▲___▲___▲___▲___▲___▲___▲___▲___▲___▲___▲___▲___▲___▲___▲___▲___▲___▲___▲___▲
