function ErrorMessage({items}) {
  
  return <>{items.length === 0 && <h3>i AM STILL hungry</h3>}</>;
}
export default ErrorMessage;
