import { Product } from "./product.type";

export interface ResponseData {
    products: Product[];
    total:    number;
    skip:     number;
    limit:    number;
}
