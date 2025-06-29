import {Link, useNavigate} from "react-router-dom";

function Cart() {

    const navigate = useNavigate()

    return (
        <div>Cart Page
        <button onClick={()=> navigate("/thanks")}>order</button>
        </div>)
}

export default Cart