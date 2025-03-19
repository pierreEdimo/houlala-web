<script lang="ts">
    import {Icon, MagnifyingGlass} from 'svelte-hero-icons';
</script>

<div class="search-button flex gap-2">
    <button class="flex items-center justify-center cursor-pointer" style="width: 50px">
        <Icon src={MagnifyingGlass} size="24" />
    </button>
    <input class="flex-1" type="text" placeholder="Recherche"/>
</div>

<style lang="scss">
    .search-button{
        border: .13rem solid #d3d3d3;
        width: 100%;
        border-radius: 8px;
    }

    input{
        border: none;
        background: transparent;
        padding: 1.2rem .5rem;
    }

    input:focus{
        outline: none;
        box-shadow: none;
    }
</style>