/* eslint-disable class-methods-use-this */
import httpReq from "./http.service";

class ProductService {
    async getProduct() {
        const { data } = await httpReq.get("/products");
        return data;
    }
}

const productHttpReq = new ProductService();

export default productHttpReq;
