// import { useSnackbar } from 'notistack';
// import { useCallback, useMemo } from 'react';

// const SUCCESS: any = { variant: 'success' };
// const ERROR: any = { variant: 'error' };
// const INFO: any = { variant: 'info' };
// const WARNING: any = { variant: 'warning' };

// function useNotifications() {
//   const { enqueueSnackbar: queue } = useSnackbar();

//   const notifyDefault = useCallback((msg: any) => queue(msg), [queue]);
//   const notifySuccess = useCallback((msg: any) => queue(msg, SUCCESS), [queue]);
//   const notifyError = useCallback((msg: any) => queue(msg, ERROR), [queue]);
//   const notifyInfo = useCallback((msg: any) => queue(msg, INFO), [queue]);
//   const notifyWarning = useCallback((msg: any) => queue(msg, WARNING), [queue]);

//   return useMemo(
//     () => ({
//       default: notifyDefault,
//       success: notifySuccess,
//       error: notifyError,
//       info: notifyInfo,
//       warning: notifyWarning,
//     }),
//     [notifyDefault, notifySuccess, notifyError, notifyInfo, notifyWarning],
//   );
// }

// export default useNotifications;
