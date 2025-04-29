<script lang="ts">
    import MainLayout from "../../shared/+mainLayout.svelte";
    import Center from "../../shared/+center.svelte";
    import {Icon, ChevronLeft} from 'svelte-hero-icons'

    const navigateBack = () => {
        window.history.back();
    }
</script>

{#snippet appHeader()}
    <div style="display: flex; width: 100%; gap: 1rem">
        <button onclick={navigateBack}>
            <Icon src={ChevronLeft} size="24" />
        </button>
        <div style="flex: 1;">
            <p>Notifications</p>
        </div>
    </div>
{/snippet}

<MainLayout {appHeader}>
    <Center>
        <p>Aucunes notifications</p>
    </Center>
</MainLayout>