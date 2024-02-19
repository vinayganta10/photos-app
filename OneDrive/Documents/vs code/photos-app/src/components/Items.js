import Container from './Container';

export default function Items (props) {
  return (
    <div>
      <h2>{props.searchTerm}</h2>
      <Container searchTerm={props.searchTerm} />
    </div>
  );
}
