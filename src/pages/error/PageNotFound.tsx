import ErrorWrap from '../../components/ErrorWrap';

const PageNotFound = () => {
  return (
    <ErrorWrap nadpis='Stránka nenalezena'>
      Stránka, kterou se snažíte hledat nebyla nalezena.
      <br />
      <br />
    </ErrorWrap>
  );
};
export default PageNotFound;
