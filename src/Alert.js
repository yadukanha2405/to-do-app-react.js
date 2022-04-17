export default function Alert({ msg, type }) {
  return <div className={`alert alert-${type}`}>{msg} </div>;
}
