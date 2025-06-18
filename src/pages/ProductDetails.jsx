import {useParams} from "react-router-dom";
import {products} from "../data/data"

function ProductDetails() {
    const {productId} = useParams();
    const currentProduct = products.find(product => product.id === parseInt(productId, 10))
    return (
        <div>
            {currentProduct ? (
                <>
                    <h1>{currentProduct.name}</h1>
                    <h2>{currentProduct.price}$</h2>
                    <img src={currentProduct.img} alt={currentProduct.name} style={{width: "150px"}}/>
                </>) : (<p> Not Found </p>)}
        </div>)
}

export default ProductDetails