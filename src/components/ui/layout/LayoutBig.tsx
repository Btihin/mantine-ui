import { Chip, Container, Paper, Skeleton, Stack } from '@mui/material';
import { ILayoutProps } from './Layout';
import { ReactNode } from 'react';
import { SkeletonNadpis } from '../skeleton/SkeletonText';

export interface ILayoutHeaderProps extends ILayoutProps {
  Nadpis?: string;
  nacitani?: boolean;
  label?: string;
  taby?: ReactNode;
}

const LayoutBig = (props: ILayoutHeaderProps) => {
  return (
    <Container maxWidth={false} disableGutters>
      <Paper sx={{ p: 2 }}>
        <Stack
          direction='row'
          spacing={1}
          justifyContent='space-between'
          alignItems='center'
        >
          {props.Nadpis ? (
            <SkeletonNadpis
              velikost='h5'
              nacitani={props.nacitani}
              text={props.Nadpis}
              sirka={400}
            />
          ) : (
            ''
          )}
          {props.label &&
            (props.nacitani ? (
              <Skeleton width={90} height={55} animation='wave' />
            ) : (
              <Chip label={props.label} />
            ))}
          {props.taby}
        </Stack>
        {props.children}
      </Paper>
    </Container>
  );
};

export default LayoutBig;
