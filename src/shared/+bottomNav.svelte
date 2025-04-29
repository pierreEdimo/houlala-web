<script lang="ts">
    let {children} = $props();
</script>

<div class="bottom-nav">
    <div style="width: 80%" class="bottom-nav-content">
        {@render children()}
    </div>
</div>

<style lang="scss">

    @media screen AND (min-width: 768px){
        .bottom-nav{
            display: none;
        }
    }

    .bottom-nav{
        width: 85%;
        background: white;
        height: 80px;
        border-radius: 8px;
        bottom: 25px;
        margin: auto;
        left: 50%;
        transform: translateX(-50%);
        position: fixed;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    }

    .bottom-nav-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        margin: auto;
    }
</style>