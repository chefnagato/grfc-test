<template>

	<UiPanel min-width="400">

		<UiPanelSection>

			<UiTextField 

				v-model="form.name"
				label="Имя пользователя"

			/>

		</UiPanelSection>

		<UiPanelSection>

			<UiTextField

				v-model="form.password"
				label="Пароль"
				password

			/>

		</UiPanelSection>

		<UiPanelError v-if="!!error">{{ error }}</UiPanelError>

		<UiPanelSection>

			<UiButton

				:disabled="!valid"
				@click="auth"

			>Войти</UiButton>

		</UiPanelSection>

	</UiPanel>

</template>

<script>

	export default {

		data: () => ( {

			form: {

				name: '',
				password: '',

			},

			error: false,

		} ),

		computed: {

			valid() {

				return !!this.form.name && !!this.form.password;

			},

		},

		methods: {

			auth() {

				this.error = false;

				let user = this.$store.getters.user( this.form )

				!!user ? this.$store.commit( 'authorizedUserId', user.id ) : this.error = 'Неверное имя пользователя или пароль';

			},

		},

	}

</script>
