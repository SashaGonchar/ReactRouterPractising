import {products} from "../data/data"
import {Link, useParams} from "react-router-dom";



function Category() {
    const {categoryId} = useParams();

    const currentCategoryArray = products.filter(products => products.categoryId === categoryId)

    return (
        <div>
            {currentCategoryArray.length > 0 ? ( <>  <h1>Category {categoryId}</h1>
                <ul style={{display: "flex"}}>
                    {currentCategoryArray.map((product) => (
                        <li key={product.name}>
                            <Link to={`/product/${product.id}`}>
                                {product.name} {product.price}$
                                <img src={product.img} alt={product.name} style={{width: "150px"}}></img>
                            </Link>
                        </li>))}
                </ul>
            </>):(<p>Category Not Found</p>)}


        </div>)
}

export default Category