// Components
import { GlobalPropertyCard } from '@/components/global/PropertyCard'

// Queries
import { getPropertyList } from '@/db/queries/properties/list.query'

export default async function PageProperties() {
	const propertyList = await getPropertyList()

	await new Promise(resolve => setTimeout(resolve, 3000))

	return (
		<div className='container mx-auto py-4'>
			<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'>
				{propertyList.map(property => (
					<GlobalPropertyCard key={property.id} {...property} />
				))}
			</div>
		</div>
	)
}
