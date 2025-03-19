<script lang="ts">
    let {children} = $props();
</script>

<div class="bottom-nav fixed shadow-xl ">
    <div style="width: 80%" class="flex items-center m-auto justify-between h-full">
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
    }

</style>