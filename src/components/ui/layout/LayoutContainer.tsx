import { Box, Breakpoint, Container, Paper, Typography } from '@mui/material';
import { ILayoutHeaderProps } from './LayoutBig';
import Grid from '@mui/material/Grid';

export interface ILayoutHeaderSizeProps extends ILayoutHeaderProps {
  Size?: false | Breakpoint | undefined;
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

export const LayoutContainer = (props: ILayoutHeaderSizeProps) => {
  const { Size = 'md', Padding = 1, Elevation = 0 } = props;
  return (
    <Container sx={{ my: 3, mx: 'auto' }} maxWidth={Size}>
      <Paper sx={{ m: 5, p: Padding }} elevation={Elevation}>
        <Typography variant='h3'>{props.Nadpis}</Typography>
        <Grid container>
          <Grid size={12}>
            <Box color='text.secondary'>{props.children}</Box>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};
