<template>

	<div class="app">

		<div class="app-inner">

			<slot></slot>

		</div>

	</div>

</template>

<style scoped>

	.app {

		display: flex;

		width: 100%;
		height: 100%;
		max-width: 100vw;
		min-height: 100vh;

		font-family: var( --basic-font-family );
		font-size: var( --basic-font-size );
		font-weight: var( --basic-font-weight );
		line-height: var( --basic-line-height );

		background: var( --color-background );

	}

	.app-inner {

		margin: auto;

	}

</style>