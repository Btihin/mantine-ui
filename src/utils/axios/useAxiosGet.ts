//co potřebuju
//axios  sec/pri
//get post....každý zvlast
//typt objektu vráceného
//url
//co se má stát v then

import { useCallback } from 'react';
import { axiosPri, GetAxiosError } from '../fetchConfig';
import useNotifications from '../useNotifications';

//hlášky do catch
export interface IUseAxiosResp {
  url: string;
  method: Method; //'get' | 'post' | 'delete' | 'put';
  body?: any;
  errorMessage: string;
}
const useAxiosResp = <T>(dependenciesCallback: any[]) => {
  const notify = useNotifications();
  //spusí se jen pokud je relogin
  const sendRequest = useCallback(
    async (
      props: IUseAxiosResp,
      dataSetFunc: (arg: T) => any,
      catchFunc?: () => any,
    ) => {
      //dispatch(setNacitaniMenu(true));
      try {
        //axios
        await axiosPri[props.method]<T>(props.url, props.body)
          .then((resp) => {
            if (resp.status === 200) {
              dataSetFunc(resp.data);
            }
            if (resp.status === 204) {
              notify.info(
                'Načtení proběhlo v pořádku, ale neexistuje žádný záznam',
              );
            }
          })
          .catch((error) => {
            //axiosCtrlr.abort();
            notify.error(GetAxiosError(error, props.errorMessage));
            if (catchFunc) {
              catchFunc();
            }
          });
      } catch (err: any) {
        if (err.response.data.chyba) {
          notify.error(err.response.data.chyba);
        } else {
          notify.error(`${props.errorMessage} - chyba připojení k databázi`);
        }
        //axiosCtrlr.abort();
      }
    },
    dependenciesCallback,
  ); // eslint-disable-line
  return { sendRequest };
};

export default useAxiosResp;

type Method = method.GET | method.POST | method.PUT | method.DELETE;
export enum method {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  DELETE = 'delete',
}
