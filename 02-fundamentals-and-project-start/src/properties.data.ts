// Types
import { PropertyFull } from './types/property.type'

export const PROPERTIES: PropertyFull[] = [
	{
		id: '1',
		owner: '1',
		name: 'Boston Commons Retreat',
		type: 'Apartment',
		description:
			'This is a beautiful apartment located near the commons. It is a 2 bedroom apartment with a full kitchen and bathroom. It is available for weekly or monthly rentals.',
		location: {
			id: '1',
			propertyId: '1',
			street: '120 Tremont Street',
			city: 'Boston',
			state: 'MA',
			zipcode: '02108'
		},
		beds: 2,
		baths: 1,
		squareFeet: 1500,
		amenities: 'Wifi',
		rates: {
			id: '1',
			propertyId: '1',
			weekly: 1100,
			monthly: 4200
		},
		sellerInfo: {
			id: '1',
			propertyId: '1',
			name: 'John Doe',
			email: 'john@gmail.com',
			phone: '617-555-5555'
		},
		isFeatured: false,
		images: [],
		createdAt: new Date(),
		updatedAt: new Date()
	},
	{
		id: '2',
		owner: '1',
		name: 'Boston Commons Retreat',
		type: 'Apartment',
		description:
			'This is a beautiful apartment located near the commons. It is a 2 bedroom apartment with a full kitchen and bathroom. It is available for weekly or monthly rentals.',
		location: {
			id: '1',
			propertyId: '1',
			street: '120 Tremont Street',
			city: 'Boston',
			state: 'MA',
			zipcode: '02108'
		},
		beds: 2,
		baths: 1,
		squareFeet: 1500,
		amenities: 'Wifi',
		rates: {
			id: '1',
			propertyId: '1',
			weekly: 1100,
			monthly: 4200
		},
		sellerInfo: {
			id: '1',
			propertyId: '1',
			name: 'John Doe',
			email: 'john@gmail.com',
			phone: '617-555-5555'
		},
		isFeatured: false,
		images: [],
		createdAt: new Date(),
		updatedAt: new Date()
	},
	{
		id: '3',
		owner: '1',
		name: 'Boston Commons Retreat',
		type: 'Apartment',
		description:
			'This is a beautiful apartment located near the commons. It is a 2 bedroom apartment with a full kitchen and bathroom. It is available for weekly or monthly rentals.',
		location: {
			id: '1',
			propertyId: '1',
			street: '120 Tremont Street',
			city: 'Boston',
			state: 'MA',
			zipcode: '02108'
		},
		beds: 2,
		baths: 1,
		squareFeet: 1500,
		amenities: 'Wifi',
		rates: {
			id: '1',
			propertyId: '1',
			weekly: 1100,
			monthly: 4200
		},
		sellerInfo: {
			id: '1',
			propertyId: '1',
			name: 'John Doe',
			email: 'john@gmail.com',
			phone: '617-555-5555'
		},
		isFeatured: false,
		images: [],
		createdAt: new Date(),
		updatedAt: new Date()
	}
]
