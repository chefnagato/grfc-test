<template>

	<div class="data">

		<div class="data-spacer"></div>

		<div class="data-header">
			
			<span class="logout" @click="$store.commit( 'authorizedUserId', null )">Выйти из системы</span>

		</div>

		<div class="data-content">

			<div class="data-aside">

				<div class="data-aside-row" v-for="table of tables" :key="table.id">

					<UiButton 

						:disabled="table.id === activeTable"
						@click="activeTable = table.id"

					>{{ table.name }}</UiButton>

				</div>

			</div>

			<div class="data-table">

				<UiPanel max-width="600">

					<template v-for="table of tables" v-if="table.id === activeTable">

						<div class="data-table-columns">

							<div class="data-table-column" v-for="column of table.columns">

								<div class="data-table-column-header">{{ column.name }}</div>

								<div class="data-table-column-values">

									<div class="data-table-column-value" v-for="value of column.values">

										{{ value }}

									</div>

								</div>

							</div>

						</div>

					</template>

				</UiPanel>

			</div>

		</div>

		<div class="data-spacer"></div>

	</div>

</template>

<script>

	export default {

		props: {

			tables: {

				type: Array,
				default: () => ( [] ),

			},

		},

		data: () => ( { 

			activeTable: null,

		} ),

		created() {

			this.activeTable = this.tables[ 0 ].id;

		},

	}

</script>

<style scoped>

	.data {

		display: flex;
		flex-flow: column nowrap;
		min-height: 100vh;

	}

	.data-spacer {

		height: 10vh;

	}

	.data-header {

		padding: calc( 2 * var( --unit ) ) calc( 3 * var( --unit ) );
		padding-top:  0;
		text-align: right;

	}

	.data-header > span {

		cursor: pointer;
		font-size: var( --unit );

	}

	.data-header > span:hover {

		color: var( --color-button-hover );

	}

	.data-content {

		flex:  1;
		display: flex;
		flex-flow: row nowrap;
		padding-right: calc( 3 * var( --unit ) );

	}

	.data-aside {

		padding: calc( 3 * var( --unit ) );

	}

	.data-aside-row:not(:last-of-type) {

		margin-bottom: var( --unit );

	}

	.data-table-columns {

		display: flex;
		flex-flow: row nowrap;

	}

	.data-table-column {

		flex:  1;

	}

	.data-table-column-header {

		padding: var( --unit ) calc( 2 * var( --unit ) );
		padding-top:  0;
		border-bottom: solid 1px var( --color-panel-border );
		white-space: nowrap;
		letter-spacing: .1em;
		font-weight: 700;

	}

	.data-table-column-values {

		padding: 0 calc( 2 * var( --unit ) );

	}

	.data-table-column-value {
		
		padding-top: var( --unit );

		text-align:  right;
		letter-spacing: .1em;

	}

	.data-table-column:first-of-type > .data-table-column-header,
	.data-table-column:first-of-type > .data-table-column-values {

		padding-left: 0;

	}

	.data-table-column:last-of-type > .data-table-column-header,
	.data-table-column:last-of-type > .data-table-column-values {

		padding-right: 0;

	}

</style>