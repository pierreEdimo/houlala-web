import axios from 'axios';
import type { CategoryModel } from '../models/category.model';

const fetchCategories = async (url: string) => {
	return await axios.get<CategoryModel[]>(url);
}

export default fetchCategories;