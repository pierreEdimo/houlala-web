<script lang="ts">
    import BottomNav from './+bottomNav.svelte';
    import Header from './+header.svelte';
    let {children, appHeader} = $props();
    import {HomeModern, Bars3, ShoppingBag, User} from 'svelte-hero-icons';
    import BottomNavButton from './+bottomNavButton.svelte';
</script>

<Header>
    {@render appHeader()}
</Header>

<main class="main-body">
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
        width: 95%;
        padding: 6.5rem 0 125px 0;
        margin: auto;
    }
</style>