export default () => ( {

	authorizedUserId: null,

	users: [

		{

			id: 'user-uuid-01',
			name: 'ivanov',
			password: '123',

		},

		{

			id: 'user-uuid-02',
			name: 'petrov',
			password: '12345',
			tables: [ 'table-uuid-01', 'table-uuid-02' ],
			columns: [ 'column-uuid-01' ],

		},

		{

			id: 'user-uuid-03',
			name: 'sidorov',
			password: '1234567',
			tables: [ 'table-uuid-02', 'table-uuid-03' ],
			columns: [ 'column-uuid-04', 'column-uuid-05' ],

		},

	],

	tables: [

		{

			id: 'table-uuid-01',
			name: 'Т1',
			columns: [ 

				'column-uuid-01',
				'column-uuid-02',
				'column-uuid-01',
				'column-uuid-03',
				'column-uuid-02',

			],

		},

		{

			id: 'table-uuid-02',
			name: 'Т2',
			columns: [ 

				'column-uuid-02',
				'column-uuid-01',
				'column-uuid-02',
				'column-uuid-04',
				'column-uuid-05',
				'column-uuid-01',

			],

		},

		{

			id: 'table-uuid-03',
			name: 'Т3',
			columns: [ 

				'column-uuid-04',
				'column-uuid-02',
				'column-uuid-04',
				'column-uuid-03',
				'column-uuid-05',

			],

		},

	],

	columns: [

		{

			id: 'column-uuid-01',
			name: 'ДФО',
			values: [ 10, 40, 80, 100, 20, 50, 45, 72 ],

		},

		{

			id: 'column-uuid-02',
			name: 'ЦФО',
			values: [ 30, 15, 120, 10, 20, 20, 65, 74, 50, 45, 188 ],

		},

		{

			id: 'column-uuid-03',
			name: 'УФО',
			values: [ 5, 40, 21, 50, 42, 190, 70, 16 ],

		},

		{

			id: 'column-uuid-04',
			name: 'СФО',
			values: [ 115, 70, 25, 48, 49, 10, 120, 166, 154, 30, 20, 100 ],

		},

		{

			id: 'column-uuid-05',
			name: 'СЗФО',
			values: [ 100, 78, 76, 30, 20, 5, 120 ],

		},

	],

} );