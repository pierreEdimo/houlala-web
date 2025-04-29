import type { CategoryModel } from '../../models/category.model';
import fetchCategories from '../../services/category.service';

export const CategoryStateService = () => {
	let categories: CategoryModel[] = $state([] as CategoryModel[]);
	let loading: boolean = $state(true);

	return {
		get categories() {
			return categories;
		},

		get loading() {
			return loading;
		},

		fetchCategories: async () => {
			const response = await fetchCategories('http://localhost:3000/api/categories');
			loading = false;

			if (response.status !== 200) {
				console.log('Error');
				return;
			}

			categories = [...response.data];
		}
	};
};
