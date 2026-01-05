import { FallbackProps } from 'react-error-boundary';
import ErrorWrap from '../../components/ErrorWrap';

const ErrorFallback = ({ error }: FallbackProps) => {
  //#region Routování ___________________________________________________________________________________
  // let paramsRoute = useParams();
  //#endregion Routování ___________________________________________________________________________________

  // useEffect(() => {
  //   if (paramsRoute.kodChyby) {
  //     switch (paramsRoute.kodChyby) {
  //       case 'unautrorized':
  //         setPopisekChyby('Uživatel nemá patřičné oprávnění');
  //         break;
  //       case 'unable-connect':
  //         setPopisekChyby('Nelze se připojit');
  //         break;
  //       default:
  //         setPopisekChyby('Neznámá chyba');
  //         break;
  //     }
  //   }
  // }, []);

  return (
    <ErrorWrap nadpis='Chyba aplikace'>
      Název: {error.name}
      <br />
      Zpráva: {error.message}
      <br />
      Podrobný popis chyby: {error.stack}
      <br />
      <br />
    </ErrorWrap>
  );
};

export default ErrorFallback;
