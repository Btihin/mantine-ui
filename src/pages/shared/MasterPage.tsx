import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from '../error/ErrorPage';
//import HlavniMenu from './menu/Appbar';
import { useThemeState } from '../../state/useThemeState';
import { MantineProvider } from '@mantine/core';
import { Outlet } from 'react-router-dom';
// const notistackRef: React.RefObject<any> = createRef();
// const onClickDismiss = (key: SnackbarKey) => () => {
//   notistackRef.current.closeSnackbar(key);
// };

function MasterPage() {
  //const { data, isSuccess, error, isError } = useGetApiAppInitGetConfig();

  // if (isError) {
  //   console.error('Chyba při načítání konfigurace aplikace:', error);
  // }

  // if (isSuccess && data) {
  //   console.info('Konfigurace aplikace načtena:', data);
  // }
  const { theme: mode } = useThemeState();
  console.log('MasterPage - režim:', import.meta.env);

  return (
    <MantineProvider defaultColorScheme={mode ? 'dark' : 'light'}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Outlet />
      </ErrorBoundary>
    </MantineProvider>
  );
}

export default MasterPage;
