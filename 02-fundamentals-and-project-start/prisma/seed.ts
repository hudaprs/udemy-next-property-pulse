// Prisma
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
	await Promise.all([
		prisma.property.deleteMany(),
		prisma.propertyImage.deleteMany(),
		prisma.propertyLocation.deleteMany(),
		prisma.propertyRate.deleteMany(),
		prisma.propertySellerInfo.deleteMany()
	])

	const properties = [
		{
			owner: '1',
			name: 'Boston Commons Retreat',
			type: 'Apartment',
			description:
				'This is a beautiful apartment located near the commons. It is a 2 bedroom apartment with a full kitchen and bathroom. It is available for weekly or monthly rentals.',
			beds: 2,
			baths: 1,
			squareFeet: 1500,
			amenities:
				'Wifi,Full kitchen,Washer & Dryer,Free Parking,Hot Tub,24/7 Security,Wheelchair Accessible,Elevator Access,Dishwasher,Gym/Fitness Center,Air Conditioning,Balcony/Patio,Smart TV,Coffee Maker',
			isFeatured: false
		},
		{
			owner: '1',
			name: 'Cozy Downtown Loft',
			type: 'Apartment',
			description: 'A cozy downtown loft with great city views.',
			beds: 1,
			baths: 1,
			squareFeet: 1800,
			amenities:
				'Wifi,Full kitchen,Washer & Dryer,Free Parking,Hot Tub,24/7 Security,Wheelchair Accessible,Elevator Access,Dishwasher,Gym/Fitness Center,Air Conditioning,Balcony/Patio,Smart TV,Coffee Maker',
			isFeatured: false
		},
		{
			owner: '2',
			name: 'Luxury Condo with a View',
			type: 'Condo',
			description:
				'Experience luxury in this stunning condo with breathtaking views.',
			beds: 3,
			baths: 2,
			squareFeet: 2200,
			amenities:
				'Wifi,Full kitchen,Washer & Dryer,Free Parking,Hot Tub,24/7 Security,Wheelchair Accessible,Elevator Access,Dishwasher,Gym/Fitness Center,Air Conditioning,Balcony/Patio,Smart TV,Coffee Maker',
			isFeatured: false
		},
		{
			owner: '2',
			name: 'Charming Cottage Getaway',
			type: 'Cottage Or Cabin',
			description: 'Escape to this charming cottage for a peaceful retreat.',
			beds: 1,
			baths: 1,
			squareFeet: 900,
			amenities:
				'Wifi,Full kitchen,Washer & Dryer,Free Parking,Hot Tub,24/7 Security,Wheelchair Accessible,Elevator Access,Dishwasher,Gym/Fitness Center,Air Conditioning,Balcony/Patio,Smart TV,Coffee Maker',
			isFeatured: false
		}
	].map(res => prisma.property.create({ data: res }))

	const createdProperties = await Promise.all(properties)
	const mappedProperties = createdProperties.map(res => ({
		...res,
		location: {
			street: '123 Countryside Lane',
			city: 'Austin',
			state: 'TX',
			zipcode: '78701'
		},
		rates: {
			nightly: 200,
			weekly: 750,
			monthly: 3300
		},
		sellerInfo: {
			name: 'David Johnson',
			email: 'david@gmail.com',
			phone: '213-555-5555'
		},
		images: ['d1.jpg', 'd2.jpg', 'd3.jpg']
	}))

	for (const property of mappedProperties) {
		await Promise.all([
			prisma.propertyImage.createMany({
				data: property.images.map(image => ({
					name: image,
					propertyId: property.id
				}))
			}),
			prisma.propertyLocation.create({
				data: { ...property.location, propertyId: property.id }
			}),
			prisma.propertyRate.create({
				data: { ...property.rates, propertyId: property.id }
			}),
			prisma.propertySellerInfo.create({
				data: { ...property.sellerInfo, propertyId: property.id }
			})
		])
	}
}

main()
	.then(async () => {
		await prisma.$disconnect()
	})
	.catch(async e => {
		console.error(e)
		await prisma.$disconnect()
		process.exit(1)
	})
