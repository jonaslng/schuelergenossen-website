import Product from "./Product";

export default function Shop(props) {
    return (
        <div className="shop-wrapper">
            <p className="shop-header">Shop</p>
            <Product title="Insektenhotels" pimg="https://image.jimcdn.com/app/cms/image/transf/dimension=676x10000:format=jpg/path/s5716ff8e3a6d452a/image/ibd1f79bf55a1f30a/version/1593630688/image.jpg"/>
            <Product pimg="https://image.jimcdn.com/app/cms/image/transf/dimension=1820x1280:format=jpg/path/s5716ff8e3a6d452a/image/i99c78999c21e2cbe/version/1572624868/image.jpg"/>
        </div>
    )
}