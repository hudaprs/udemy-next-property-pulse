// Data
import { PROPERTIES } from '@/properties.data'

// Components
import { GlobalPropertyCard } from '@/components/global/PropertyCard'

export default function PageProperties() {
	return (
		<div className='container mx-auto py-4'>
			<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'>
				{PROPERTIES.map(property => (
					<GlobalPropertyCard key={property.id} {...property} />
				))}
			</div>
		</div>
	)
}
