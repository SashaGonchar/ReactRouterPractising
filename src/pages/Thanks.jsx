import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

function Thanks() {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/", {replace: true});
        }, 5000);

        return () => clearTimeout(timer);
    }, [navigate])

    return <div>
        You will be redirected to the home page within 5 seconds...
    </div>
}

export default Thanks;