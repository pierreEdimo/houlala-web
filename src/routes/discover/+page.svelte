<script lang="ts">
	import MainLayout from '../../shared/+mainLayout.svelte';
	import Center from '../../shared/+center.svelte';
	import { onMount } from 'svelte';
	import { CategoryStateService } from '../../state/category/category.svelte';
	import CategoryCard from '../../shared/+categoryCard.svelte';
	import AppHeader from '../../shared/+appHeader.svelte';

	let categoryStateService = CategoryStateService();

	onMount(async () => {
		await categoryStateService.fetchCategories();
	});

	let categories = $derived(categoryStateService.categories);
	let categoryLoading = $derived(categoryStateService.loading);
</script>

{#snippet appHeader()}
	<AppHeader />
{/snippet}

<MainLayout {appHeader}>
	{#if categoryLoading === true}
		<Center>
			<p>...Loading</p>
		</Center>
	{/if}

	{#if categories.length > 0}
		<p>Découvrez nos produits par categories</p>
		<div class="grid-system">
			{#each categories as category (category.id)}
				<CategoryCard categoryModel={category} />
			{/each}
		</div>
	{/if}
</MainLayout>

<style lang="scss">
	.grid-system {
		width: 100%;
		display: grid;
		grid-template-columns: calc(95% / 2) calc(95% / 2);
		grid-auto-rows: 160px;
		gap: 1rem;
	}
</style>
