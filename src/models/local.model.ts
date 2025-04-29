import type { ProductTypeModel } from './product.type.model';

export type LocalModel = {
	id: number;
	name: string;
	shortDescription: string;
	description: string;
	imageUrl: string;
	userId: string;
	isStore: boolean;
	isVerified: boolean;
	telephoneNumber: string;
	email: string;
	website: string;
	createdAt: Date;
	updatedAt: Date;
	countryCode: string;
	city: string;
	street: string;
	productType: ProductTypeModel;
}