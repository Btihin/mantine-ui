import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from '../error/ErrorPage';
//import HlavniMenu from './menu/Appbar';
import { useThemeState } from '../../state/useThemeState';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { Outlet } from 'react-router-dom';
import Appbar from './menu/AppBar';
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
    <MantineProvider forceColorScheme={mode ? 'dark' : 'light'}>
      <Notifications />
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <>
          <Appbar>
            <Outlet />
          </Appbar>
        </>
      </ErrorBoundary>
    </MantineProvider>
  );
}

export default MasterPage;
