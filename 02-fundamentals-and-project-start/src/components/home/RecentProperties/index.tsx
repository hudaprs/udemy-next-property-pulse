// Data
import { PROPERTIES } from '@/properties.data'

// Components
import { GlobalPropertyCard } from '@/components/global/PropertyCard'

// Next UI
import { Button } from '@nextui-org/react'

// Next
import Link from 'next/link'

const HomeRecentProperties = () => {
	return (
		<div className='container mx-auto px-4'>
			<h2 className='text-2xl text-blue-500 text-center font-bold mb-5'>
				Recent Properties
			</h2>
			<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'>
				{PROPERTIES.map(property => (
					<GlobalPropertyCard key={property.id} {...property} />
				))}
			</div>
			<div className='flex items-center justify-center mt-8'>
				<Button size='lg' className='w-[400px]' as={Link} href='/properties'>
					View All Properties
				</Button>
			</div>
		</div>
	)
}

export { HomeRecentProperties }
