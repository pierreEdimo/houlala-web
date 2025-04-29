<script lang="ts">
	import CategoryCard from './+categoryCard.svelte';
	let { categories, loading } = $props();
</script>

<div class="category-container">
	{#if loading === true}
		<div class="loading-container">...Loading</div>
	{/if}

	{#if categories.length > 0}
		<div class="category-container-content">
			<p>Découvrez nos produits par categories</p>
			<div class="category-list">
				{#each categories as category (category.id)}
					<CategoryCard width={'145'} categoryModel={category} />
				{/each}
			</div>
		</div>
	{/if}
</div>

<style lang="scss">
	.category-container {
		width: 100%;
		background: #f4efe8;
		height: 180px;
		display: flex;
	}

	.category-container-content {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		gap: 4px;
	}

	.category-list {
		width: 100%;
		overflow: auto;
		display: flex;
		gap: 1rem;
		flex: 1;
		padding-bottom: 1rem;
	}

	.loading-container {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
