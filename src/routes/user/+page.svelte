<script lang="ts">
    import MainLayout from "../../shared/+mainLayout.svelte";
    import AppHeader from "../../shared/+appHeader.svelte";
</script>

{#snippet appHeader()}
	<AppHeader />
{/snippet}

<MainLayout {appHeader}>
    <p>Hello</p>
</MainLayout>