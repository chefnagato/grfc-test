<template>

	<div class="ui-text-field">

		<div class="ui-text-field-label" :class="{ hidden: false === !!value }">{{ label }}</div>

		<div class="ui-text-field-outer">

			<input 

				:type="password ? 'password' : 'text'"
				:placeholder="label"
				:value="value"

				@input="onInput"

			/>

		</div>

	</div>

</template>

<script>

	export default {

		model: {

			prop: 'value',
			event: 'input',

		},

		props: {

			value: {

				type: [ String, Number ],
				default: ''

			},

			label: {

				type: String,
				default: '',

			},

			password: {

				type: Boolean,
				default: false

			},

		},

		methods: {

			onInput( e ) {

				this.$emit( 'input', e.target.value );

			},

		},

	}

</script>

<style>

	.ui-text-field-label {

		height: var( --unit );
		font-size: calc( var( --unit ) - 2px );
		line-height: var( --unit );
		text-transform: uppercase;
		letter-spacing: .2em;

	}

	.ui-text-field-label.hidden {

		visibility: hidden;

	}

	.ui-text-field-outer {

		border-bottom: solid 1px var( --color-panel-border );

	}

	.ui-text-field-outer > input {

		display:  block;
		width: 100%;

		margin: 0;
		padding: 0;
		border: none;
		outline:  none !important;

		padding-bottom: calc( 0.5 * var( --unit ) );

	}

</style>

