/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
import ShoppingCart from "components/ShoppingCart/ShoppingCart";
import { useEffect, useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { openCart } from "redux/actions/cartAction";

function Navbar() {
    const [itemsCount, setItemsCount] = useState(0);
    const dispatch = useDispatch();

    const {
        cart: { cartItem },
    } = useSelector((state: any) => state);

    useEffect(() => {
        setItemsCount(cartItem.reduce((acc: any, curr: any) => (acc += curr.quantity), 0));
    }, [cartItem]);

    return (
        <div className="bg-white py-3 shadow">
            <nav className="mx-4 flex max-w-6xl items-center justify-between lg:mx-auto ">
                <div>
                    <Link to="/">
                        <h1 className="text-sm font-bold text-gray-500 drop-shadow sm:text-lg">
                            Redux Shopping Cart
                        </h1>
                    </Link>
                </div>

                <ul className="flex items-center space-x-6 text-sm font-semibold">
                    <li className="hidden lg:inline-flex">
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li className="hidden lg:inline-flex">
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li className="hidden lg:inline-flex">
                        <NavLink to="/shop">Shop</NavLink>
                    </li>
                    <li onClick={() => dispatch(openCart(true))} className="relative">
                        <button
                            type="button"
                            className="rounded-full border p-3 text-lg hover:bg-gray-100"
                        >
                            <FiShoppingCart />
                        </button>
                        <span className="absolute inset-y-5 inset-x-8 flex h-6 w-6 items-center  justify-center rounded-full bg-yellow-400 text-sm font-bold">
                            {itemsCount}
                        </span>
                    </li>
                </ul>
            </nav>
            {/* cart */}
            <ShoppingCart />
        </div>
    );
}

export default Navbar;
