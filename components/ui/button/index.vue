<template>

	<div class="ui-button" :class="{ disabled }" @click="onClick">

		<slot></slot>

	</div>

</template>

<script>

	export default {

		props: {

			disabled: {

				type: Boolean,
				default: false,

			},

		},

		methods: {

			onClick() {

				if ( !this.disabled ) this.$emit( 'click' );

			},

		},

	}

</script>

<style scoped>

	.ui-button {

		padding: var( --unit );

		background: var( --color-button );
		color: var( --color-button-text );
		border-radius: 4px;
		font-weight: 700;

		cursor: pointer;
		text-align: center;

	}

	.ui-button:hover {

		background: var( --color-button-hover );

	}

	.ui-button.disabled {

		cursor: default;
		background: var( --color-button-disabled );
		color: var( --color-button-disabled-text );

	}

</style>