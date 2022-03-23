import Product from "./Product";
import { useState } from "react";
import ProductPreview from "./productPreview";

export default function Shop(props) {
  const [shownProduct, setShownProduct] = useState(null);
  const products = [
    {
      name: "Insektenhotels",
      description:
        "Die selbstgemachten Insektenhotels sind in den Farben gelb, grün und blau erhältlich. Sie wurden nach Vorlage des NABU hergestellt und es wurde umweltschonender und frostsicherer Fliesenkleber und Lacke verwendet. Die Bambusrohre und Asthölzer sind unbehandelt und die Knoten im Bambus sind entfernt. Sie sind von uns selbst sauber und splitterfrei entgratet worden.",
      photo:
        "https://image.jimcdn.com/app/cms/image/transf/none/path/s5716ff8e3a6d452a/image/ifb0d99e1922118b9/version/1593594487/image.jpg",
      price: "20€",
      available: true,
      shipping_time: "1-3 Tage Lieferzeit",
      features: [],
      badge: "Neu",
    },
    {
      name: "Mehrwegbecher Selmer Skyline",
      description:
        "In sieben verschiedenen Farben erhältlich nachwachsenden Rohstoffen produziert und daher frei von jeglichen Schadstoffen Selbstverständlich sind unsere Becher bei Kontakt mit Lebensmittel absolut unbedenklich. Spülmaschinen geeignet: Mindestens 250 Zyklen (TÜV Rheinland) Im Gegensatz zu herkömmlichen Kunststoffbechern – keine Belastung für die Umwelt Die Produktion der Rohstoffe und des Bechers finden in Deutschland statt – kurze Wege",
      photo:
        "https://image.jimcdn.com/app/cms/image/transf/dimension=1820x1280:format=jpg/path/s5716ff8e3a6d452a/image/i99c78999c21e2cbe/version/1572624868/image.jpg",
      price: "5€",
      available: true,
      shipping_time: "1-3 Tage Lieferzeit",
      features: [],
      badge: "Neu",
    },
  ];
  const shopNormal = (
    <div>
      {products.forEach((product) => (
        <ProductPreview
          name={product.name}
          photo={product.photo}
          badge={product.badge}
        />
      ))}
    </div>
  );
  return (
    <div className="shop-wrapper">
      <p className="shop-header">Shop</p>
      {shownProduct === null ? (
        shopNormal
      ) : (
        <Product
          title={products[shownProduct].name}
          description={products[shownProduct].description}
          photoURL={products[shownProduct].photo}
          price={products[shownProduct].price}
          badge={products[shownProduct].badge}
        />
      )}
    </div>
  );
}
