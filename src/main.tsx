import { lazy, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const AppLazy = lazy(() => import('./App'));

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppLazy />
  </StrictMode>,
);
