import Product from "./Product";

export default function Shop(props) {
  return (
    <div className="shop-wrapper">
      <p className="shop-header">Shop</p>
      <Product
        photoURL="https://image.jimcdn.com/app/cms/image/transf/none/path/s5716ff8e3a6d452a/image/ifb0d99e1922118b9/version/1593594487/image.jpg"
        title="Insektenhotels"
        description="Die selbstgemachten Insektenhotels sind in den Farben gelb, grün und blau erhältlich. Sie wurden nach Vorlage des NABU hergestellt und es wurde umweltschonender und frostsicherer Fliesenkleber und Lacke verwendet. Die Bambusrohre und Asthölzer sind unbehandelt und die Knoten im Bambus sind entfernt. Sie sind von uns selbst sauber und splitterfrei entgratet worden."
      />
      <Product
        photoURL="https://image.jimcdn.com/app/cms/image/transf/dimension=1820x1280:format=jpg/path/s5716ff8e3a6d452a/image/i99c78999c21e2cbe/version/1572624868/image.jpg"
        title="Mehrwegbecher"
        description="Die Mehrwegbecher in sieben verschiedenen Farben sind mit nachwachsenden Rohstoffen produziert worden und deshalb frei von Schadstoffen. Außerdem sind sie im Gegensatz zu herkömmlichen Kunststoffbechern keine Gefahr für die Umwelt und bei Kontakt zu Lebensmitteln absolut unbedenklich. "
      />
    </div>
  );
}
