<template>

	<div class="ui-panel" :style="`

		min-width: ${ !!minWidth ? minWidth + 'px' : 'auto' };
		max-width: ${ !!maxWidth ? maxWidth + 'px' : 'auto' };

	`">

		<slot></slot>

	</div>

</template>

<script>

	export default {

		props: {

			minWidth: {

				type: [ Number, String ],
				default: 0,

			},

			maxWidth: {

				type: [ Number, String ],
				default: 0,

			},

		},

	}

</script>

<style scoped>

	 .ui-panel {

	 	display: flex;
	 	flex-flow: column nowrap;

	 	padding: calc( 3 * var( --unit ) );

	 	background: var( --color-panel );
	 	border: solid 1px var( --color-panel-border );
	 	border-radius: 6px;

	 }

	 .ui-panel > .ui-panel-section:not(:last-of-type) {

	 	margin-bottom: calc( 1.5 * var( --unit ) );

	 }

	 .ui-panel > .ui-panel-error:not(:last-of-type) {

	 	margin-bottom: calc( 1.5 * var( --unit ) );

	 }

</style>