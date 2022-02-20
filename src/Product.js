export default function Product(props) {
  return (
    <div className="product-card">
      <img src={props.photoURL} />
      <div className="product">
        <p className="product-title">{props.title}</p>
        <div className="pdescription">
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}
