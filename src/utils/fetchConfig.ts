import { QueryClient } from '@tanstack/react-query';
import axios from 'axios';

export const queryClient = new QueryClient();

//TODO toto dořešit
export const hlavicka = {
  'Access-Control-Allow-Origin': '*',
  //Accepts: 'application/json',
  //'Content-Type': 'application/json; charset=utf-8',
};

// export const getUrl = (page: string) => {
//   return import.meta.env.VITE_SERVER_API + page;
// };
export const axiosCtrlr = new AbortController();

/**
 * Globální nastavení načítání
 */
const axiosCreateSet = {
  timeout: 180000,
  headers: hlavicka,
  signal: axiosCtrlr.signal,
  withCredentials: !import.meta.env.PROD,
};

/**
 * Nastavení načítání na původní api
 */
export const axiosPri = axios.create({
  ...axiosCreateSet,
  baseURL: import.meta.env.VITE_SERVER_API,
});

export interface IAxiosGet {
  url: string;
  errorMessage: string;
}

/**
 * Funkce pro načtení dat. Generická určuje jakého typu mají být vrácená data.
 * @param props objekt s url a případnou chybovou zprávou, která by se měla vypsat
 */
export const AxiosGet = <T>(props: IAxiosGet): Promise<T> => {
  //const resp = await
  return axiosPri
    .get(`api/${props.url}`)
    .then((resp) => resp.data)
    .catch((error: Error) => {
      console.log('error- fetchconfig', error);
      // throw (
      //   ((error.message = `${props.errorMessage} Server: ${error.response.data.chyba}`),
      //   error.name)
      // );
      throw GetAxiosError(error, props.errorMessage);
    });
};

export interface IAxiosPost extends IAxiosGet {
  body: any;
}

export const AxiosPost = <T>(props: IAxiosPost): Promise<T> => {
  return axiosPri.post(`api/${props.url}`, props.body);
};

/**
 * Nastavení načítání na nové api
 */
export const axiosSec = axios.create({
  ...axiosCreateSet,
  baseURL: import.meta.env.VITE_SERVER_API_SEC,
});

export const GetAxiosError = (error: any, oblast: string) => {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.log(oblast + ' error response');
    console.log(oblast + error);
    console.log(oblast + error.response);

    return `Chyba spojení: ${oblast} - ${error.response.status} - ${error.response.data.chyba}`;
  } else if (error.request) {
    console.log(oblast + ' error request');
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    console.log(oblast + error.request);
    return `Chyba spojení - ${oblast} - server neodpovídá`;
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log(oblast + ' error obecný');
    console.log(oblast + ' Error', error.message);
    return ` ${oblast} - Neznámá chyba`;
  }
};

// export const AxiosInstance = async (url: string, options?: any) => {
//   if (options?.method === 'GET') {
//     return AxiosGet({ url, errorMessage: 'Chyba' });
//   } else if (options?.method === 'POST') {
//     return AxiosPost({});
//   }
// };
