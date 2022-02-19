export default function Product(props) {
  return (
    <div className="product-card">
      <img src={props.pimg} />
      <div className="pcontent">
        <p className="pheader">{props.title}</p>
      </div>
    </div>
  );
}
