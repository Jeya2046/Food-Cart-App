import './Heater.css'
import { Link } from "react-router-dom"


const Heater = () => {
    return (
        <div className="NavContainer">
            <div className="logo">
                <h3>Food<span>APP</span></h3>
            </div>
            <div className="list">
                <ul>
                    <li> <Link to={"/"}>Home</Link></li>
                    <li><Link to={"/cart"}>Cart</Link></li>
                </ul>
            </div>
        </div>
    )



}

export default Heater