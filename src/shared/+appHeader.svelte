<script lang="ts">
    import logo from '../images/houlala1.png';
    import {Bell, User, ShoppingBag, Heart } from 'svelte-hero-icons';
    import IconButton from './+iconButton.svelte';
    import Header from './+header.svelte';
    import SearchButton from './+searchButton.svelte';
    import { goto } from '$app/navigation';

    const navigate = (navLink:string) => {
        goto(navLink);
    }
</script>

<Header>
   <div class="desktop-header w-full h-full items-center flex justify-between">
       <div class="flex h-full items-center">
           <div class="title-content flex items-center relative cursor-pointer">
               <div class="image-container">
                   <img class="image" alt="logo" src={logo}/>
               </div>
               <h1 class="text-2xl font-bold absolute">Houlala</h1>
           </div>
           <div class="search-button-container">
               <SearchButton/>
           </div>
       </div>
        <div class="flex gap-6 menu-container">
            <IconButton iconSource={Heart} onClick={() => navigate('/favorites')} />
            <IconButton iconSource={ShoppingBag} onClick={() => navigate('/cart')} />
            <IconButton iconSource={Bell} onClick={() => navigate('/notifications')} />
            <IconButton iconSource={User} onClick={() => navigate('/user')} />
        </div>
   </div>
   <div class="mobile-header h-full w-full items-center gap-4 flex justify-between">
       <SearchButton/>
       <IconButton iconSource={Bell}/>
   </div>
</Header>

<style lang="scss">
    .search-button-container{
        margin-left: 120px;
        display: flex;
        width: 600px;
    }

    .image-container{
        width: 90px;
    }

    .image{
        width: 100%;
        object-fit: cover;
    }

    .title-content h1 {
        left: 70px;
    }


    @media screen AND (min-width:768px) {
        .mobile-header {
            display: none;
        }
    }

    @media screen AND (max-width: 767.99px){
        .desktop-header{
            display: none;
        }
    }

</style>