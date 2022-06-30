/* eslint-disable no-undef */
/* eslint-disable no-shadow */
import SingleProduct from "components/SingleProduct/SingleProduct";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import productHttpReq from "services/Product.services";
import { IProduct } from "types/Product";

function Store() {
    // eslint-disable-next-line no-undef
    const [products, setProducts] = useState<IProduct[]>([]);
    const [loading, setLoading] = useState(false);
    // const { cart } = useSelector((state: any) => state);

    useEffect(() => {
        setLoading(true);
        const fetchProduct = async () => {
            try {
                const data = await productHttpReq.getProduct();
                setProducts(data);
            } catch (error) {
                toast.error("There is error in Data Fetching");
                setLoading(false);
            }
            setLoading(false);
        };

        fetchProduct();
    }, []);

    return (
        <div>
            <h1 className="py-4 px-4 text-2xl font-semibold">Store</h1>

            {/* All the items */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {loading ? (
                    <div className="fixed  top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-gray-100">
                        <p className="text-sm font-semibold sm:text-lg">Please wait a moment...</p>
                    </div>
                ) : (
                    products.map((item: IProduct) => <SingleProduct key={item.id} item={item} />)
                )}
            </div>
        </div>
    );
}

export default Store;
