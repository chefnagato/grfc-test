export default {

	authorizedUser: state => {

		for ( let user of state.users ) {

			if ( user.id === state.authorizedUserId ) {

				user.data = [];
 
				for ( let table of state.tables ) {

					if ( false === !!user.tables || user.tables.includes( table.id ) ) {

						let userTable = JSON.parse( JSON.stringify( table ) );

						let columns = [];

						for ( let columnId of table.columns ) {

							for ( let column of state.columns ) {

								if ( column.id !== columnId ) continue;

								if ( false === !!user.columns || user.columns.includes( column.id ) ) columns.push( column );

							}

						}

						userTable.columns = columns;

						user.data.push( userTable ); 

					}

				}

				return user;

			}

		}

		return false;

	},

	user: state => payload => {

		for ( let user of state.users ) {

			if ( user.name === payload.name && user.name === payload.name ) return user;

		}

		return false;		

	},

}