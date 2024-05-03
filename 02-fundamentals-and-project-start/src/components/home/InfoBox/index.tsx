// Next UI
import { Button, Card, CardBody } from '@nextui-org/react'

const HomeInfoBox = () => {
	return (
		<div className='container mx-auto px-4 my-8'>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
				<Card className='p-4'>
					<CardBody className='flex flex-col items-start gap-4'>
						<h3 className='font-bold text-2xl'>For Renters</h3>
						<p>
							Find your dream rental property. Bookmark properties and contact
							owners
						</p>
						<Button>Browse Properties</Button>
					</CardBody>
				</Card>

				<Card className='p-4'>
					<CardBody className='flex flex-col items-start gap-4'>
						<h3 className='font-bold text-2xl'>For Property Owners</h3>
						<p>
							List your properties and reach potential tenants. Rent as an
							Airbnb or long term.
						</p>
						<Button>Add Property</Button>
					</CardBody>
				</Card>
			</div>
		</div>
	)
}

export { HomeInfoBox }
