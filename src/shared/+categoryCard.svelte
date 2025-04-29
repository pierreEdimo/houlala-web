<script lang="ts">
	import { goto } from "$app/navigation";
	let { categoryModel, width = null } = $props();

	const navigateTo = (url: string) => {
		goto(url);
	}
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
	<div onclick={() => navigateTo(`${categoryModel.route}/${categoryModel.id}`)} class="category-card">
	<div style:width={`${width}px`} class="card-content">
		<img
			class="category-image"
			alt="category"
			src={`/images/categories/${categoryModel.imageUrl}`}
		/>
		<p class="category-name" style="font-weight: bold;">{categoryModel.name}</p>
	</div>
</div>

<style lang="scss">
	.card-content {
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: start;
		justify-content: end;
	}
	.category-card {
		background: white;
		height: 100%;
		border-radius: 8px;
		padding: 1rem;
	}
	.category-image {
		width: 80px;
	}
	.category-name {
		display: -webkit-box;
		line-clamp: 1;
		-webkit-line-clamp: 1; /* Number of lines to show */
		-webkit-box-orient: vertical;
		overflow: hidden;
		text-overflow: ellipsis;
	}
</style>
