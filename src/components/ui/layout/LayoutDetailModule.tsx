import { Breakpoint, Container, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { ILayoutHeaderProps } from './LayoutBig';

export interface ILayoutHeaderSizeProps extends ILayoutHeaderProps {
  Size?: false | Breakpoint | undefined;
  Sx?: object | undefined;
  Padding?: 2 | 3 | 4 | 5;
  Elevation?:
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | 15
    | 16
    | 17
    | 18
    | 19
    | 20
    | 21
    | 22
    | 23
    | 24;
}

export const LayoutDetailModule = (props: ILayoutHeaderSizeProps) => {
  const { Size = 'md' } = props;
  return (
    <Container sx={{ my: 3, mx: 'auto' }} maxWidth={Size}>
      <Stack direction={'column'} alignItems={'center'} spacing={3}>
        <Typography variant='h4'>{props.Nadpis}</Typography>
        <Grid container spacing={2}>
          {props.children}
        </Grid>
      </Stack>
    </Container>
  );
};
