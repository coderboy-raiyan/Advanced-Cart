import { FiShoppingCart } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
    return (
        <div className="bg-white py-3 shadow">
            <nav className="mx-auto flex max-w-6xl items-center justify-between ">
                <div>
                    <Link to="/">
                        <img
                            className="w-36"
                            src="https://icms-image.slatic.net/images/ims-web/bfe8de2c-b737-42ab-b1f1-576042ab0412.png"
                            alt=""
                        />
                    </Link>
                </div>

                <ul className="flex items-center space-x-6 text-sm font-semibold">
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/shop">Shop</NavLink>
                    </li>
                    <li>
                        <button type="button" className="rounded-full border p-3 text-lg">
                            <FiShoppingCart />
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
