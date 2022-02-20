export default function Cart(props) {
  return (
    <div className="cart-wrapper">
      {props.cart == null ? (
        <p className="nothing">Der Einkaufswagen ist leer</p>
      ) : null}
    </div>
  );
}
