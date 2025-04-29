import type { CategoryModel } from './category.model';

export type ProductTypeModel = {
	id: number;
	name: string;
	imageUrl: string;
	route: string;
	category: CategoryModel;
};