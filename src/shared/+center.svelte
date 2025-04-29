<script lang="ts">
	let {children} = $props()
</script>

<div class="center">
	{@render children()}
</div>

<style lang="scss">
	.center{
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
</style>