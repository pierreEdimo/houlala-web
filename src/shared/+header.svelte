<script lang="ts">
    let {children} = $props();
</script>


<header class="app-header fixed">
    <div class="app-header-content">
        {@render children()}
    </div>
</header>

<style lang="scss">
    .app-header{
        height: 6rem;
        background: #f4efe8;
        width: 100vw;
        padding-right: 8px;
        position: fixed;
    }

    .app-header-content{
        width: 98%;
        height: inherit;
        margin: auto;
        background-color: transparent;
        display: flex;
        align-items: center;
    }
</style>