import { useCallback, useMemo } from 'react';
//import { IPravaAkceUzivatelUtvar } from '../interfaces/Role/IAkce';

// export const MaAkci = (akceId: string, Akce: IPravaAkceUzivatelUtvar[]) => {
//   return Akce.some((s) => s.id_akce.startsWith(akceId));
// };

type CeleJmeno = string | undefined | null;

type Variant =
  | variant.JMENO
  | variant.PRIJMENI
  | variant.INICIALY
  | variant.CELEJMENO;
export enum variant {
  JMENO = 'jmeno',
  PRIJMENI = 'prijmeni',
  INICIALY = 'inicialy',
  CELEJMENO = 'celejmeno',
}

function useUser() {
  const fn = useCallback((celeJmeno: CeleJmeno, typ: Variant) => {
    let jmeno: string = 'F';
    let prijmeni: string = 'S';
    let celeJmenoLocal: string = 'Uživatel nenalezen';
    //validace jména
    if (
      celeJmeno !== undefined &&
      celeJmeno !== '' &&
      celeJmeno !== null &&
      celeJmeno.length
    ) {
      const arrayJmeno = celeJmeno.split(' ');
      prijmeni = arrayJmeno[0];
      jmeno = arrayJmeno[1];
      celeJmenoLocal = celeJmeno;
    }
    if (typ === variant.JMENO) return jmeno;
    if (typ === variant.PRIJMENI) return prijmeni;
    if (typ === variant.INICIALY) return jmeno[0] + prijmeni[0];
    if (typ === variant.CELEJMENO) return celeJmenoLocal;
    return jmeno + prijmeni;
  }, []);
  const getJmeno = useCallback(
    (celeJmeno: CeleJmeno) => fn(celeJmeno, variant.JMENO),
    [fn],
  );
  const getPrijmeni = useCallback(
    (celeJmeno: CeleJmeno) => fn(celeJmeno, variant.PRIJMENI),
    [fn],
  );
  const getInicialy = useCallback(
    (celeJmeno: CeleJmeno) => fn(celeJmeno, variant.INICIALY),
    [fn],
  );
  const getCeleJmeno = useCallback(
    (celeJmeno: CeleJmeno) => fn(celeJmeno, variant.CELEJMENO),
    [fn],
  );

  return useMemo(
    () => ({
      jmeno: getJmeno,
      prijmeni: getPrijmeni,
      celeJmeno: getCeleJmeno,
      inicialy: getInicialy,
    }),
    [getJmeno, getPrijmeni, getInicialy, getCeleJmeno],
  );
}

export default useUser;
