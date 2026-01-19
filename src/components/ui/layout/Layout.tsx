//import { ILayoutProps } from '../../interfaces/iLayout';

import { Container } from '@mantine/core';
import type { PropsWithChildren } from 'react';

export const Layout = (props: PropsWithChildren) => {
  return (
    <Container fluid>
      <div>{props.children}</div>
    </Container>
  );
};
