import axios from 'axios';
import type { ProductModel } from '../models/product.model';

const fetchProducts = async (url: string) => {
	return await axios.get<ProductModel[]>(url);
};

const fetchProductById = async (id: string) => {
	return await axios.get<ProductModel>('http://localhost:8080/products/' + id);
}

export { fetchProducts, fetchProductById };

