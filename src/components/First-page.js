import { Link } from "react-router-dom";

function First_page(){
    return(
        <div>
            <div>
                <h1>Register As?</h1>
                <Link to="/login"><button>Buyer</button></Link>
                <Link to="/register"><button>Seller</button></Link>
            </div>
        </div>
    );
}

export default First_page;