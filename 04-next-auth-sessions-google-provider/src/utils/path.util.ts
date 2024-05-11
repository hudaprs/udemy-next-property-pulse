export const paths = {
	root: {
		index: () => '/'
	},
	property: {
		index: () => '/properties',
		show: (id: string) => `/properties/${id}`,
		create: () => `/properties/create`,
		saved: () => '/properties/saved'
	},
	profile: {
		index: () => '/profile'
	}
}
