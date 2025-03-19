<script lang="ts">
    import AppHeader from './+appHeader.svelte';
    import BottomNav from './+bottomNav.svelte';
    let {children} = $props();
    import {HomeModern, Bars3, ShoppingBag, User} from 'svelte-hero-icons';
    import BottomNavButton from './+bottomNavButton.svelte';
</script>

<AppHeader/>

<main class="main-body m-auto">
    {@render children()}
</main>

<BottomNav>
    <BottomNavButton iconSource={HomeModern} navLink=""/>
    <BottomNavButton iconSource={Bars3} navLink="discover"/>
    <BottomNavButton iconSource={ShoppingBag} navLink="cart"/>
    <BottomNavButton iconSource={User} navLink="user"/>
</BottomNav>

<style lang="scss">
    .main-body{
        padding: 7rem 0 1rem 0;
        width: 1080px;
    }

    @media screen AND (max-width: 767.99px) {
        .main-body{
            width: 95%;
        }

    }
</style>