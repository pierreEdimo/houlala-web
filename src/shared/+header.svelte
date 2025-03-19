<script lang="ts">
    let {children} = $props();
</script>


<header class="app-header w-full fixed">
    <div class="app-header-content h-full m-auto flex items-center justify-between">
        {@render children()}
    </div>
</header>

<style lang="scss">
    .app-header{
        height: 6rem;
        background: #f4efe8;
    }

    .app-header-content{
        width: 95%;
        background: transparent;
    }
</style>