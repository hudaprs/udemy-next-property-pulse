export const paths = {
	property: {
		index: () => '/properties',
		show: (id: string) => `/properties/${id}`,
		create: () => `/properties/create`
	}
}
