/* eslint-disable no-shadow */
import SingleProduct from "components/SingleProduct/SingleProduct";
import { useEffect, useState } from "react";
import productHttpReq from "services/Product.services";

function Store() {
    const [products, setProducts] = useState<any[]>([]);
    // const { cart } = useSelector((state: any) => state);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const data = await productHttpReq.getProduct();
                setProducts(data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchProduct();
    }, []);

    console.log(products);

    return (
        <div>
            <h1 className="py-4 text-2xl font-semibold">Store</h1>

            {/* All the items */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {products.map((item: any) => (
                    <SingleProduct key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
}

export default Store;
