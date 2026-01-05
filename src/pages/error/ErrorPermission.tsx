import ErrorWrap from '../../components/ErrorWrap';

const ErrorPermission = () => {
  return (
    <ErrorWrap nadpis='Přístup odepřen'>
      Nemáte oprávnění prohlížet tuto sekci
      <br />
      <br />
    </ErrorWrap>
  );
};

export default ErrorPermission;
