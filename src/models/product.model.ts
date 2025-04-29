import type { CategoryModel } from './category.model';
import type { LocalModel } from './local.model';
import type { ProductTypeModel } from './product.type.model';

export type ProductModel = {
	id: number;
	name: string;
	unitSellingPrice: number;
	unitBuyingPrice: number;
	images: string[];
	category: CategoryModel;
	mainImageUrl: string;
	isPublished: boolean;
	quantity: number;
	salesNumber: number;
	createdAt: Date;
	updatedAt: Date;
	isFavorite: boolean;
	local: LocalModel;
	productType: ProductTypeModel;
}