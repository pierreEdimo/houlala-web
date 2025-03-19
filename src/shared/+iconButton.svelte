<script lang="ts">
    import {Icon} from 'svelte-hero-icons';
    let {iconSource, onClick = null, title = null} = $props()
</script>

<button title={title} class="cursor-pointer" onclick={onClick}>
    <Icon src={iconSource} size="24" />
</button>