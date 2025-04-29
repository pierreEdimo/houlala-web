<script lang="ts">
	import MainLayout from "../../../shared/+mainLayout.svelte";
    import { Icon, ChevronLeft } from "svelte-hero-icons";
    import Center from "../../../shared/+center.svelte";
    const navigateBack = () => {
        window.history.back();
    }
</script>

{#snippet appHeader()}
    <div style="display: flex; 100%; gap: 1rem">
        <button onclick={() => navigateBack()}>
            <Icon src={ChevronLeft} size="24" />
        </button>
    </div>
{/snippet}

<MainLayout {appHeader}>
    <Center>
        <p>Aucuns produits</p>
    </Center>
</MainLayout>