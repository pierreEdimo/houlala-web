<script lang="ts">
	import logo from '../images/houlala1.png';
	import { Bell, User, ShoppingBag, Heart, Icon } from 'svelte-hero-icons';
	import IconButton from './+iconButton.svelte';
	import Header from './+header.svelte';
	import SearchButton from './+searchButton.svelte';
	import { goto } from '$app/navigation';

	const navigate = (navLink: string) => {
		goto(navLink);
	};
</script>

<Header>
	<div class="mobile-header">
        <div style="flex: 1;">
			<SearchButton/>
		</div>
		<button onclick={() => navigate('/notifications')}>
			<Icon src={Bell} size="24" />
		</button>
    </div>
</Header>

<style lang="scss">
	.mobile-header {
		display: flex;
		width: 100%;
		gap: 1rem;
	}
	@media screen AND (min-width: 768px) {
		.mobile-header {
			display: none;
		}
	}
</style>
