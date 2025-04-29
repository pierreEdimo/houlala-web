<script lang="ts">
    import {Icon, MagnifyingGlass} from 'svelte-hero-icons';
</script>

<div class="search-button">
    <button style="width: 50px">
        <Icon src={MagnifyingGlass} size="24" />
    </button>
    <input class="flex-1" type="text" placeholder="Recherche"/>
</div>

<style lang="scss">
    button{
        display: flex;
        justify-content: center;
        align-items: center;
        background: transparent;
    }
    .search-button{
        border: .13rem solid #d3d3d3;
        width: 100%;
        border-radius: 8px;
        display: flex;
    }

    input{
        border: none;
        background: transparent;
        padding: .7rem .5rem;
    }

    input:focus{
        outline: none;
        box-shadow: none;
    }
</style>