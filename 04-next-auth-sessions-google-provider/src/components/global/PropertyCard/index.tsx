// Next
import Image from 'next/image'

// Next UI
import {
	Card,
	CardHeader,
	CardBody,
	Chip,
	Divider,
	CardFooter,
	Button
} from '@nextui-org/react'

// Types
import { PropertyCardProps } from './types'

// Remix Icon
import {
	RiHotelBedLine,
	RiShowersLine,
	RiRuler2Line,
	RiMoneyDollarBoxLine,
	RiMapPinLine
} from '@remixicon/react'

// Utils
import { paths } from '@/utils/path.util'

// Next
import Link from 'next/link'

const GlobalPropertyCard = ({
	id,
	name,
	type,
	beds,
	baths,
	squareFeet,
	propertyLocation,
	propertyRate
}: PropertyCardProps) => {
	return (
		<Card className='p-0 w-full'>
			<CardHeader className='flex-col items-start p-0 relative'>
				<Image
					alt='Card background'
					className='w-full h-[250px]'
					src='https://picsum.photos/seed/picsum/500/500'
					width={250}
					height={250}
					objectFit='cover'
				/>

				<Chip className='absolute top-3 right-3 bg-white'>
					<p className='text-blue-400 font-bold'>
						${propertyRate?.monthly?.toLocaleString()}/mo
					</p>
				</Chip>
			</CardHeader>
			<CardBody className='flex flex-col gap-4'>
				<div className='flex flex-col gap-2'>
					<h6 className='font-light'>{type}</h6>
					<h4 className='font-bold'>{name}</h4>
				</div>

				<div className='flex flex-col gap-6 mt-4'>
					<div className='flex gap-4 flex-col md:flex-row w-full justify-center items-center'>
						<div className='flex justify-center items-center gap-1'>
							<RiHotelBedLine />
							<p>{beds}</p>
							<p>Bed(s)</p>
						</div>
						<div className='flex justify-center items-center gap-1'>
							<RiShowersLine />
							<p>{baths}</p>
							<p>Bath(s)</p>
						</div>
						<div className='flex justify-center items-center gap-1'>
							<RiRuler2Line />
							<p>{squareFeet}</p>
							<p>sqft</p>
						</div>
					</div>
					<div className='flex gap-4 flex-col md:flex-row justify-center items-center w-full'>
						{propertyRate &&
							Object.keys(propertyRate)
								.filter(rate => !['id', 'propertyId'].includes(rate))
								.map(rate => (
									<div
										className='flex justify-center items-center gap-1'
										key={rate}
									>
										<RiMoneyDollarBoxLine />
										{rate}
									</div>
								))}
					</div>
				</div>

				<Divider />

				<div className='flex flex-col md:flex-row items-center justify-between w-full gap-2'>
					<p className='text-red-600 font-semibold flex items-center gap-1'>
						<RiMapPinLine /> {propertyLocation?.city} {propertyLocation?.state}
					</p>

					<Button
						className='w-full md:w-auto'
						as={Link}
						href={paths.property.show(id)}
					>
						Details
					</Button>
				</div>
			</CardBody>
		</Card>
	)
}

export { GlobalPropertyCard }
