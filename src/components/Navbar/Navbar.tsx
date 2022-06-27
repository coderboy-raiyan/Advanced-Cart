/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
import { useEffect, useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
    const [itemsCount, setItemsCount] = useState(0);
    const {
        cart: { cartItem },
    } = useSelector((state: any) => state);

    useEffect(() => {
        setItemsCount(cartItem.reduce((acc: any, curr: any) => (acc += curr.quantity), 0));
    }, [cartItem]);

    return (
        <div className="bg-white py-3 shadow">
            <nav className="mx-auto flex max-w-6xl items-center justify-between ">
                <div>
                    <Link to="/">
                        <img
                            className="w-32"
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
                    <li className="relative">
                        <button type="button" className="rounded-full border p-3 text-lg">
                            <FiShoppingCart />
                        </button>
                        <span className="absolute inset-y-5 inset-x-8 flex h-6 w-6 items-center  justify-center rounded-full bg-yellow-400 text-sm font-bold">
                            {itemsCount}
                        </span>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
