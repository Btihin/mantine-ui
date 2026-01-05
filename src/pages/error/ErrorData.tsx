import ErrorWrap from '../../components/ErrorWrap';

export interface IErrorDataProps {
  nazev: string;
  text: string;
}
const ErrorData = (props: IErrorDataProps) => {
  return (
    <ErrorWrap nadpis={props.nazev}>
      <br />
      {props.text}
      <br />
      <br />
    </ErrorWrap>
  );
};

export default ErrorData;
