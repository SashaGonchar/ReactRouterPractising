import {products} from "../data/data"
import {Link, useLocation, useParams, useSearchParams} from "react-router-dom";


function Category() {
    const {categoryId} = useParams();
    const [searchParams, setSearchParams] = useSearchParams();

    const price = (searchParams.get("price") ? searchParams.get("price") : Infinity);


    function handleChange(e) {
        const value = e.target.value
        setSearchParams(value ? {price: value} : {});
    }

    const location = useLocation();
    console.log(location)

    const currentCategoryArray = products.filter(product => product.categoryId === categoryId && product.price <= price);

    return (
        <div>
            <h2>{`You came from ${location.state?.from}`}</h2>
            <>
                <h1>Category {categoryId}</h1>
                <div>
                    <label>Filter price less than: </label>
                    <input
                        type="number"
                        value={searchParams.get("price") || ""}
                        onChange={handleChange}
                        placeholder={"Enter max price"}/>
                </div>


                <ul style={{display: "flex"}}>
                    {currentCategoryArray.map((product) => (
                        <li key={product.name}>
                            <Link to={`/product/${product.id}`}>
                                {product.name} {product.price}$
                                <img src={product.img} alt={product.name} style={{width: "150px"}}></img>
                            </Link>
                        </li>))}
                </ul>
            </>
        </div>)
}

export default Category