<template>

	<App>

		<Auth v-if="!user" />

		<Data v-else :tables="user.data" />

	</App>

</template>

<script>

	import { mapGetters } from 'vuex';

	export default {

		computed: {

			...mapGetters( {

				user: 'authorizedUser',

			} ),

		},

	}

</script>