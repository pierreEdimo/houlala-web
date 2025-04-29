<script lang="ts">
	import { onMount } from 'svelte';
	import MainLayout from '../shared/+mainLayout.svelte';
	import { CategoryStateService } from '../state/category/category.svelte';
	import HorizontalCategories from '../shared/+horizontalCategories.svelte';
	import AppHeader from '../shared/+appHeader.svelte';

	let categoryService = CategoryStateService();

	onMount(async () => {
		await categoryService.fetchCategories();
	});

	let categories = $derived(categoryService.categories);
	let categoryLoading = $derived(categoryService.loading);
</script>

{#snippet appHeader()}
	<AppHeader />
{/snippet}

<MainLayout appHeader={appHeader}>
	<HorizontalCategories loading={categoryLoading} {categories} />
</MainLayout>
