import {categories} from "../data/data"
import {Link} from "react-router-dom";

function Home() {
    return (
        <div>
            <Link to="/category/Electronics" state={{from:"Home Page", price: 600}}> Buy our cheapest Electronics </Link>
            <h1>Categories</h1>
            <ul style={{display: "flex"}}>
                {categories.map((category) => (
                    <li key={category.id}>
                        <Link to={`/category/${category.name}`}>
                            {category.name}
                            <img src={category.img} alt={category.name} style={{width: "150px"}}/>
                        </Link>
                    </li>
                ))}

            </ul>

        </div>
    );
}

export default Home