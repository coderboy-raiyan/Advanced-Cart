/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { closeCart } from "redux/actions/cartAction";

function ShoppingCart() {
    const dispatch = useDispatch();
    const {
        cart: { isCartOpen },
    } = useSelector((state: any) => state);

    return (
        <>
            {isCartOpen && (
                <div
                    onClick={() => dispatch(closeCart(false))}
                    className="fixed top-0 left-0 right-0 bottom-0 z-[100] bg-[rgba(0,0,0,.3)]"
                />
            )}
            <div
                onClick={() => dispatch(closeCart(false))}
                className={`fixed ${
                    isCartOpen ? "right-0" : "-right-[100%]"
                } top-0 z-[101] h-full  bg-white shadow transition-all lg:w-[25%]`}
            >
                {/* Cart Header */}
                <div className="flex  items-center justify-between p-4">
                    <h1 className="text-xl font-medium uppercase">Shopping Cart</h1>
                    <button
                        onClick={() => dispatch(closeCart(false))}
                        className="flex items-center text-sm font-semibold uppercase"
                        type="button"
                    >
                        <AiOutlineClose className="inline" /> Close
                    </button>
                </div>
                <hr />
            </div>
        </>
    );
}

export default ShoppingCart;
