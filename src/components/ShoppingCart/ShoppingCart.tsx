/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import Currency from "react-currency-formatter";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { closeCart } from "redux/actions/cartAction";
import { IProduct } from "types/Product";

function ShoppingCart() {
    const dispatch = useDispatch();
    const {
        cart: { isCartOpen },
    } = useSelector((state: any) => state);
    const {
        cart: { cartItem },
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
                } top-0 z-[101] h-full  overflow-y-auto bg-white shadow transition-all lg:w-[25%]`}
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

                {/* products */}
                <div className="h-[400px] overflow-y-auto scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-300">
                    {cartItem.map((item: IProduct) => (
                        <div className="my-2 flex items-center justify-center space-x-6 space-y-2 border-b py-2 px-6">
                            <img
                                className="h-[60px] w-[60px]  object-contain"
                                src={item?.image}
                                alt=""
                            />

                            {/* details */}
                            <div className="flex w-full flex-col  space-y-2">
                                <p className="w-3/4 text-[14px] font-medium">{item.title}</p>

                                <div className="flex w-24 items-center justify-center space-x-3 rounded-full border-2 text-sm">
                                    <button className="border-r-2 p-1" type="button">
                                        -
                                    </button>
                                    <p className=" p-1">{item.quantity}</p>
                                    <button className="border-l-2 p-1" type="button">
                                        +
                                    </button>
                                </div>

                                <p className="text-sm font-light text-gray-500">
                                    {item.quantity} x{" "}
                                    <span className="text-orange-600">
                                        <Currency quantity={item.price} currency="USD" />
                                    </span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Subtotal */}
                <div className="border">
                    <p className="flex justify-between p-4 text-xl font-medium uppercase">
                        Subtotal : <span className="text-orange-500">0$</span>
                    </p>
                </div>

                {/* Checkout */}
                <div className="p-4">
                    <button
                        className="w-full rounded-full bg-[#3d3747] p-3 text-sm uppercase text-white"
                        type="button"
                    >
                        Checkout
                    </button>
                </div>
            </div>
        </>
    );
}

export default ShoppingCart;
