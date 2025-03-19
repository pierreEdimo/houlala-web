<script lang="ts">
    import {Icon} from 'svelte-hero-icons';
    let {iconSource, navLink} = $props();
    import { goto } from '$app/navigation';
    import { onMount } from 'svelte';

    let currentRoute: string =  $state('');

    onMount(() => {
        currentRoute = window.location.pathname;
    })

    const navigateTo = () => {
        goto(`/${navLink}`);
    }
</script>

<button onclick={navigateTo}>
    <Icon style="color: {currentRoute === `/${navLink}` ? 'orange': 'black'}" solid={currentRoute === `/${navLink}`} src={iconSource} size="24"/>
</button>