import { Alert, Box, Button, Flex } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

export interface IErrorWrapProps {
  children: React.ReactNode;
  nadpis: string;
}
const ErrorWrap = (props: IErrorWrapProps) => {
  const navigate = useNavigate();
  const handleHomePage = () => {
    navigate('/');
  };
  return (
    <Box>
      <Alert color='red' title={props.nadpis}>
        {props.children}
        <Flex direction={'row'} justify={'flex-end'} gap={2}>
          <Button size='small' variant='filled' color='error'>
            Service desk
          </Button>
          <Button size='small' variant='outline' color='error' onClick={handleHomePage}>
            Zpět na úvodní obrazovku
          </Button>
        </Flex>
      </Alert>
    </Box>
  );
};
export default ErrorWrap;
