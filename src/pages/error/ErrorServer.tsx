import ErrorWrap from '../../components/ErrorWrap';

const ErrorServer = () => {
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
      Název: Server neodpovídá
      <br />
      Prvotní načítání aplikace skončilo chybou. Nahlašte prosím chybu na service desk
      <br />
      <br />
    </ErrorWrap>
  );
};

export default ErrorServer;
